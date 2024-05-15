import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/product.service';
import { Product } from '../product/model/product';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [

  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {



}
