import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from '../service.component';
import { Service } from '../../model/service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [
    ServiceComponent,
    CommonModule,
    RouterLink,
    HttpClientModule
  ],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.css'
})

export class ServiceDetailsComponent implements OnInit{
  service: Service = new Service;

  constructor(
    private services: ServiceService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')

    if(id){
      this.services.findById(id).subscribe(response => this.service = response);
    }
  }
}
