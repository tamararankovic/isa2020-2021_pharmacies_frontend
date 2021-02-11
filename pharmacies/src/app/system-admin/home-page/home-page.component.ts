import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AllComplaintsDTO } from '../DTOs/all-complaints-dto';
import { AnswerOnComplaintDTO } from '../DTOs/answer-on-complaint-dto';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public dataSource: AllComplaintsDTO[] = [];
  displayedColumns: string[] = ['content', 'complainedOn', 'patient', 'select'];
  public showButton : boolean = true;
  public answer : string = "";
  public currentElement : AllComplaintsDTO = new AllComplaintsDTO(0, "", "", "", "");
  
  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }

  ngOnInit(): void {
    
    this.adminService.getAllComplaints().subscribe(
      (data) => this.dataSource = data
    );
  }
  
  public OnClick(element) {
    this.showButton = false;
    this.currentElement=element;

  }
  Cancel(){
    this.showButton = true;
    this.answer="";
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
  public Answer(){
    console.log(this.currentElement.type);
    console.log(this.answer);
    console.log(this.currentElement.complaintId);
    this.adminService.answerOnComplaint(new AnswerOnComplaintDTO(this.answer, this.currentElement.type, this.currentElement.complaintId)).subscribe(
      (data) => {
        let message = "you successfully answered on complaint ";
        this.openSnackBar(message, "Okay");
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );

  }
}
