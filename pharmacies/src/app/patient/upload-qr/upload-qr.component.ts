import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-upload-qr',
  templateUrl: './upload-qr.component.html',
  styleUrls: ['./upload-qr.component.css']
})
export class UploadQrComponent implements OnInit {

  selectedFileHide = true;
  selectedFile: File = null;
  fileName = "";
  fileExtension = "";

  constructor(private _http: HttpClient,private patientService : PatientService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.selectedFileHide = false;
    this.fileName = "Image selected";
    this.fileExtension = this.selectedFile.name.split('?')[0].split('.').pop();
  }
  submit(){
    const fd = new FormData();
    if(this.selectedFile != null){
      fd.append('imageFile', this.selectedFile,  this.selectedFile.name);
      console.log(this.selectedFile.name);
      this.patientService.sendQrCode(fd).subscribe();
    }
  }
}