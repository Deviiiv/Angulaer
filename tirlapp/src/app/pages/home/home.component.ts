import { Component, OnInit } from '@angular/core';
import { OrderdetailService } from 'src/app/services/orderdetail.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
 
  constructor(private service:OrderdetailService) { }
  foodData:any;

  ngOnInit(): void{
    // Initialization logic here
    this.foodData=this.service.foodDetails;
  }
}
