import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  constructor(private orderService : OrderService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.orderService.getAll().subscribe(
      (val) => { let va = val.find(v => v.id == Number(this.route.snapshot.paramMap.get('id'))); if (!va.editable) this.router.navigate(['pharmacy-admin/order/' + this.route.snapshot.paramMap.get('id')]);}
    )
  }

}
