import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PharmacyDTO } from '../DTOs/pharmacy-dto';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-register-pharmacy',
  templateUrl: './register-pharmacy.component.html',
  styleUrls: ['./register-pharmacy.component.css']
})
export class RegisterPharmacyComponent implements OnInit {

  public address : string;
  public nameOfPharmacy : string;
  public description : string; 

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar, private router : Router) { }


  ngOnInit(): void {
  }

  registerPharmacy(){
    
      this.adminService.registerPharmacy(new PharmacyDTO(this.nameOfPharmacy, this.description, this.address)).subscribe(
          (data) => {
            let message = this.nameOfPharmacy + " " + ", " + "pharmacy is created. ";
            this.openSnackBar(message, "Okay");
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
}
