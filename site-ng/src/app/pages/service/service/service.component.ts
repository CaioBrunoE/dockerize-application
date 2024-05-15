
import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServicePipe } from './service.pipe';

@Component({
  selector: 'app-service',
  standalone: true,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  imports: [CommonModule, FormsModule, RouterModule, ServicePipe],
})
export class ServiceComponent implements OnInit {
  searchValue: string = '';
  services: Service[] = [];
  filteredService: Service[] = []
  category: string = '';

  constructor(public service: ServiceService, public route: ActivatedRoute){}

  ngOnInit(): void {
    const idCategory = this.route.snapshot.paramMap.get('idCategory')
    if(idCategory){
      this.service.findByIdCategory(idCategory).subscribe(response => {
        this.services = response;
        this.filteredService = this.services;
      })
    } else {
      this.service.findAll().subscribe(response => {
        this.services = response;
        this.filteredService = this.services;
      })
    }
  }
}
