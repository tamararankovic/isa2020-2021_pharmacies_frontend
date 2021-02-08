import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PharmacyService } from '../service/pharmacy.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private pharmacyService : PharmacyService, private snackBar : MatSnackBar) { }

  public pharmAppsMonth = [];
  public pharmAppQuarter = [];
  public pharmAppYear = [];

  public dermAppsMonth = [];
  public dermAppQuarter = [];
  public dermAppYear = [];

  public appsMonth = [];
  public appQuarter = [];
  public appYear = [];

  public medConsumptionMonth = [];
  public medConsumptionQuarter = [];
  public medConsumptionYear = [];

  public incomePharmApp = [];
  public incomeDermApp = [];
  public incomeMedConsumption = [];
  public income1 = [];
  public income2 = [];
  public income3 = [];
  public totalIncome1 = 0;
  public totalIncome2 = 0;
  public totalIncome3 = 0;
  public totalIncome = [];

  minDate = new Date();
  maxDate = new Date();
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  ngOnInit(): void {
    this.getPharmAppCountByMonth();
  }

  getPharmAppCountByMonth(){
    this.pharmacyService.getPharmAppCountByMonth().subscribe(
      (val) => {
        for(let data of val) {
          this.pharmAppsMonth.push({ name : data.timeReference, value : data.value })
        }
        this.pharmAppsMonth = [...this.pharmAppsMonth];
        this.getPharmAppCountByQuarter(); }
    )
  }

  getPharmAppCountByQuarter() {
    this.pharmacyService.getPharmAppCountByQuarter().subscribe(
      (val) => { 
        for(let data of val) {
          this.pharmAppQuarter.push({ name : data.timeReference, value : data.value })
        }
        this.pharmAppQuarter = [...this.pharmAppQuarter];
        this.getPharmAppCountByYear(); }
    )
  }

  getPharmAppCountByYear() {
    this.pharmacyService.getPharmAppCountByYear().subscribe(
      (val) => { 
        for(let data of val) {
          this.pharmAppYear.push({ name : data.timeReference, value : data.value })
        }
        this.pharmAppYear = [...this.pharmAppYear];
        this.getDermAppCountByMonth(); }
    )
  }

  getDermAppCountByMonth() {
    this.pharmacyService.getDermAppCountByMonth().subscribe(
      (val) => { 
        for(let data of val) {
          this.dermAppsMonth.push({ name : data.timeReference, value : data.value })
        }
        this.dermAppsMonth = [...this.dermAppsMonth];
        this.getDermAppCountByQuarter(); }
    )
  }

  getDermAppCountByQuarter() {
    this.pharmacyService.getDermAppCountByQuarter().subscribe(
      (val) => { 
        for(let data of val) {
          this.dermAppQuarter.push({ name : data.timeReference, value : data.value })
        }
        this.dermAppQuarter = [...this.dermAppQuarter];
        this.getDermAppCountByYear(); }
    )
  }

  getDermAppCountByYear() {
    this.pharmacyService.getDermAppCountByYear().subscribe(
      (val) => { 
        for(let data of val) {
          this.dermAppYear.push({ name : data.timeReference, value : data.value })
        }
        this.dermAppYear = [...this.dermAppYear];
        this.getAppCountByMonth(); }
    )
  }

  getAppCountByMonth() {
    this.pharmacyService.getAppCountByMonth().subscribe(
      (val) => { 
        for(let data of val) {
          this.appsMonth.push({ name : data.timeReference, value : data.value })
        }
        this.appsMonth = [...this.appsMonth];
        this.getAppCountByQuarter();}
    )
  }

  getAppCountByQuarter() {
    this.pharmacyService.getAppCountByQuarter().subscribe(
      (val) => { 
        for(let data of val) {
          this.appQuarter.push({ name : data.timeReference, value : data.value })
        }
        this.appQuarter = [...this.appQuarter];
        this.getAppCountByYear(); }
    )
  }

  getAppCountByYear() {
    this.pharmacyService.getAppCountByYear().subscribe(
      (val) => { 
        for(let data of val) {
          this.appYear.push({ name : data.timeReference, value : data.value })
        }
        this.appYear = [...this.appYear];
        this.getMedicineConsumptionByMonth(); }
    )
  }

  getMedicineConsumptionByMonth() {
    this.pharmacyService.getMedicineConsumptionByMonth().subscribe(
      (val) => {
        for(let data of val) {
          this.medConsumptionMonth.push({ name : data.timeReference, value : data.value })
        }
        this.medConsumptionMonth = [...this.medConsumptionMonth];
        this.getMedicineConsumptionByQuarter(); }
    )
  }

  getMedicineConsumptionByQuarter() {
    this.pharmacyService.getMedicineConsumptionByQuarter().subscribe(
      (val) => { 
        for(let data of val) {
          this.medConsumptionQuarter.push({ name : data.timeReference, value : data.value })
        }
        this.medConsumptionQuarter = [...this.medConsumptionQuarter];
        this.getMedicineConsumptionByYear(); }
    )
  }

  getMedicineConsumptionByYear() {
    this.pharmacyService.getMedicineConsumptionByYear().subscribe(
      (val) => { 
        for(let data of val) {
          this.medConsumptionYear.push({ name : data.timeReference, value : data.value })
        }
        this.medConsumptionYear = [...this.medConsumptionYear];
        this.getIncomeFromPharmApp(); }
    )
  }

  getIncomeFromPharmApp() {
    this.pharmacyService.getIncomeFromPharmApp().subscribe(
      (val) => { 
        for(let data of val) {
          this.incomePharmApp.push({ name : data.timeReference, value : data.value })
        }
        this.incomePharmApp = [...this.incomePharmApp];
        this.getIncomeFromDermApp(); }
    )
  }

  getIncomeFromDermApp() {
    this.pharmacyService.getIncomeFromDermApp().subscribe(
      (val) => { 
        for(let data of val) {
          this.incomeDermApp.push({ name : data.timeReference, value : data.value })
        }
        this.incomeDermApp = [...this.incomeDermApp];
        this.getIncomeFromMedicines(); }
    )
  }

  getIncomeFromMedicines() {
    this.pharmacyService.getIncomeFromMedicines().subscribe(
      (val) => {
        for(let data of val) {
          this.incomeMedConsumption.push({ name : data.timeReference, value : data.value })
        }
        this.incomeMedConsumption = [...this.incomeMedConsumption];
        this.income1.push({name : 'Pharmacist ppointments', series: this.incomePharmApp});
        this.income2.push({name : 'Dermatologist ppointments', series: this.incomeDermApp});
        this.income3.push({name : 'Medicines', series: this.incomeMedConsumption});
        this.income1 = [...this.income1];
        this.income2 = [...this.income2];
        this.income3 = [...this.income3];
        this.calculateTotalIncome();
        this.calculateDates();
      }
    )
  }

  calculateTotalIncome() {
    this.totalIncome1 = 0;
    this.totalIncome2 = 0;
    this.totalIncome3 = 0;
    for(let i of this.income1[0]['series']) {
      this.totalIncome1 += i['value'];
    }
    for(let i of this.income2[0]['series']) {
      this.totalIncome2 += i['value'];
    }
    for(let i of this.income3[0]['series']) {
      this.totalIncome3 += i['value'];
    }
    this.totalIncome = [];
    this.totalIncome.push({name : "Pharmacist appointments", value : this.totalIncome1});
    this.totalIncome.push({name : "Dermatologist appointments", value : this.totalIncome2});
    this.totalIncome.push({name : "Medicines", value : this.totalIncome3});
    this.totalIncome = [...this.totalIncome];
  }

  calculateDates() {
    let date1 = new Date(Number(this.incomePharmApp[0]['name'].split('.')[2]), Number(this.incomePharmApp[0]['name'].split('.')[1])-1, Number(this.incomePharmApp[0]['name'].split('.')[0]));
    let date2 = new Date(Number(this.incomeDermApp[0]['name'].split('.')[2]), Number(this.incomeDermApp[0]['name'].split('.')[1])-1, Number(this.incomeDermApp[0]['name'].split('.')[0]));
    let date3 = new Date(Number(this.incomeMedConsumption[0]['name'].split('.')[2]), Number(this.incomeMedConsumption[0]['name'].split('.')[1])-1, Number(this.incomeMedConsumption[0]['name'].split('.')[0]));
    let minDate = date1;
    if(date2 < minDate) {
      minDate = date2;
    }
    if(date3 < minDate) {
      minDate = date3;
    }
    this.minDate = minDate;
  }

  filter() {
    if(this.startDate.value > this.endDate.value) {
       this.openSnackBar("Selected dates invalid!", "Okay");
    } else {
      let income1 = [];
      this.income1 = [];
      for(let i of this.incomePharmApp) {
        let d = new Date(Number(i['name'].split('.')[2]), Number(i['name'].split('.')[1])-1, Number(i['name'].split('.')[0]));
        if( d >= this.startDate.value && d <= this.endDate.value) {
          income1.push(i);
         }
      }
      this.income1.push({name : 'Pharmacist ppointments', series: income1});
      this.income1 = [...this.income1];

      let income2 = [];
      this.income2 = [];
      for(let i of this.incomeDermApp) {
        let d = new Date(Number(i['name'].split('.')[2]), Number(i['name'].split('.')[1])-1, Number(i['name'].split('.')[0]));
        if(d >= this.startDate.value && d <= this.endDate.value) {
          income2.push(i);
         }
      }
      this.income2.push({name : 'Dermatologist ppointments', series: income2});
      this.income2 = [...this.income2];

      let income3 = [];
      this.income3 = [];
      for(let i of this.incomeMedConsumption) {
        let d = new Date(Number(i['name'].split('.')[2]), Number(i['name'].split('.')[1])-1, Number(i['name'].split('.')[0]));
        if(d >= this.startDate.value && d <= this.endDate.value) {
          income3.push(i);
         }
      }
      this.income3.push({name : 'Medicines', series: income3});
      this.income3 = [...this.income3];

      this.calculateTotalIncome();
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
