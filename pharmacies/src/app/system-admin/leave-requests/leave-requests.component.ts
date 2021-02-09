import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { LeaveRequestDTO } from '../../pharmacy-admin/DTOs/leave-request-dto';
import { LeaveService } from '../../pharmacy-admin/service/leave.service';

@Component({
  selector: 'app-leave-requests',
  templateUrl: './leave-requests.component.html',
  styleUrls: ['./leave-requests.component.css']
})
export class LeaveRequestsComponent implements OnInit {

  constructor(private leaveService : LeaveService, private snackBar : MatSnackBar, public dialog: MatDialog) { }

  displayedColumns: string[] = ['Name', 'Type', 'StartDate', 'EndDate', 'Accept', 'Decline'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  requests : LeaveRequestDTO[] = [];
  dataSource = new MatTableDataSource<LeaveRequestDTO>(this.requests);

  reasonDeclined : string = "";
  successful : boolean = false;

  ngOnInit(): void {
    this.get();
  }

  accept(id : number) {
    this.leaveService.accept(id).subscribe(
      (val) => { this.openSnackBar("Leave request successfully accepted!", "Okay"); this.get() },
      error => this.openSnackBar(error.error.message, "Okay")
    )
  }

  get() {
    this.leaveService.getAll().subscribe(
      (val) => { this.requests = val; this.dataSource.data = this.requests; this.dataSource.paginator = this.paginator; }
    )
  }

  openDialog(id : number): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '600px',
      data: this.reasonDeclined
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reasonDeclined = result;
      if(this.reasonDeclined == "" || this.reasonDeclined == undefined || this.reasonDeclined == null) {
        this.openSnackBar("You must write the reason for declining the leave request!", "Okay")
      } else {
        this.leaveService.decline(id, this.reasonDeclined).subscribe(
          (val) => {this.openSnackBar("Leave request successfully declined!", "Okay"); this.get()},
          error => this.openSnackBar(error.error.message, "Okay")
        )
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

@Component({
  templateUrl: 'dialog.html'
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
