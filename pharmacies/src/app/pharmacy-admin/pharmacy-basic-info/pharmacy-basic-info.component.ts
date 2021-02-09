import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmacyBasicInfoDTO } from '../DTOs/pharmacy-basic-info-dto';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-pharmacy-basic-info',
  templateUrl: './pharmacy-basic-info.component.html',
  styleUrls: ['./pharmacy-basic-info.component.css']
})
export class PharmacyBasicInfoComponent implements OnInit {

  @ViewChild('search')
  public searchElementRef: ElementRef;
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private pharmacyService : PharmacyService,
    private snackBar : MatSnackBar
  ) { }

  public latitude;
  public longitude;
  public zoom = 16;
  private geoCoder;

  public data : PharmacyBasicInfoDTO = new PharmacyBasicInfoDTO("", "", "", 0);

  public addressValid : boolean = false;

  ngOnInit(): void {
    this.pharmacyService.get().subscribe(
      (val) => {this.data = val;
        this.mapsAPILoader.load().then(() => {
          this.geoCoder = new google.maps.Geocoder;
          this.geoCoder.geocode({ address: this.data.address }, (results, status) => {
            if (status === "OK") {
              this.latitude = +results[0].geometry.location.lat();
              this.longitude = +results[0].geometry.location.lng();
              this.zoom = 15;
            } else {
              this.openSnackBar("Geocode was not successful for the following reason: " + status, "Okay");
            }
          });
      }
    );

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            this.addressValid = false;
            return;
          }
          this.addressValid = true;
          this.data.address = autocomplete.getPlace().formatted_address;
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });
  }

  update() {
    this.geoCoder.geocode({ address: this.data.address }, (results, status) => {
      if (status === "OK") {
        this.latitude = +results[0].geometry.location.lat();
        this.longitude = +results[0].geometry.location.lng();
        this.zoom = 15;
        this.pharmacyService.update(this.data).subscribe(
          (val) => this.openSnackBar("Information successfully changed!", "Okay"),
          error => this.openSnackBar(error.error, "Okay")
        );
      } else {
        this.openSnackBar("Address couldn't be found, can't update information!", "Okay");
      }
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  change() {
    this.addressValid = false;
  }
}
