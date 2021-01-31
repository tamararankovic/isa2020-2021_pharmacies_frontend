import { Component, OnInit } from '@angular/core';
import { DermDTO } from '../DTOs/derm-dto';
import { DermService } from '../service/derm.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private dermService : DermService) { }

  ngOnInit(): void {
  }

}
