import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoyaltyDTO } from '../DTOs/loyalty-dto';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-loyalty-program',
  templateUrl: './loyalty-program.component.html',
  styleUrls: ['./loyalty-program.component.css']
})
export class LoyaltyProgramComponent implements OnInit {

  public pointsAfterAppointment : number;
  public pointsAfterAdvising : number;
  public pointsForRegular : number=0;
  public discountForRegular : number=0;
  public pointsForSilver : number;
  public discountForSilver : number;
  public pointsForGold : number;
  public discountForGold : number;

  constructor(private adminService : AdminService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  addLoyalty(){
    if(this.discountForSilver<1 || this.pointsForSilver<1) this.openSnackBar("Discount and points for silver chategory must be greater than 1", "Okay");
    else if(this.discountForRegular !=0 || this.pointsForRegular!=0)  this.openSnackBar("Discount and points are not given for regular users.", "Okay");
    else if(this.discountForGold<=this.discountForSilver || this.pointsForGold<=this.pointsForSilver) this.openSnackBar("Discount and points for gold must be greater than those for silver.", "Okay");
    else {
    this.adminService.addLoyaltyProgram(new LoyaltyDTO(this.pointsAfterAppointment, this.pointsAfterAdvising, this.pointsForRegular, this.discountForRegular, this.pointsForSilver, this.discountForSilver, this.pointsForGold, this.discountForGold)).subscribe(
      (data) => {
        let message = "loyalty program is successfully updated";
        this.openSnackBar(message, "Okay");
      },
      error => {
          this.openSnackBar(error.error, "Okay");
        
      }
    );
  }
}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
