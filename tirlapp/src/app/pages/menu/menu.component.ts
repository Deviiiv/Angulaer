import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderdetailService } from 'src/app/services/orderdetail.service';
OrderdetailService
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
foodData: any;

 constructor(private service:OrderdetailService){}
 getmenuId:any
menuData:any;
 ngOnInit(): void {
  this.getmenuId=this.service.foodDetails;
 }
}
