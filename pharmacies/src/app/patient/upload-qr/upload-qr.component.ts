import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ERecepyDTO } from '../DTOs/erecepy-dto';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-upload-qr',
  templateUrl: './upload-qr.component.html',
  styleUrls: ['./upload-qr.component.css']
})
export class UploadQrComponent implements OnInit {

  public dataSource : ERecepyDTO[] = [];
  selectedFileHide = true;
  selectedFile: File = null;
  fileName = "";
  fileExtension = "";
  public showButton : boolean = false;

  public displayedColumns = ["Name", "Address", "Rating","Price" ,"Choose"];

  constructor(private _snackBar: MatSnackBar,private _http: HttpClient,private patientService : PatientService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileHide = false;
    this.fileName = "Image selected";
    this.fileExtension = this.selectedFile.name.split('?')[0].split('.').pop();
  }
  public choose(element){
    element.clicked=true;
    this.showButton = true;
    this.patientService.choosePharmacy(element).subscribe(
      (data) => {
        let message = "You succesfully bought all medicines. ";
        this.openSnackBar(message, "Okay");
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  sortByPrice(){
    this.patientService.sortByPrice(this.dataSource).subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  sortByRating(){
    this.patientService.sortByRating(this.dataSource).subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  sortByPharmacyName(){
    this.patientService.sortByPharmacyName(this.dataSource).subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  sortByPharmacyAddress(){
    this.patientService.sortByPharmacyAddress(this.dataSource).subscribe(
      (data) => {
        this.dataSource = data;
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
  
  
  
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

  submit(){
    const fd = new FormData();
    if(this.selectedFile != null){
      fd.append('imageFile', this.selectedFile,  this.selectedFile.name);
      console.log(this.selectedFile.name);
      this.patientService.sendQrCode(fd).subscribe( (data) => {
        this.dataSource = data;
      });
    }
  }
}