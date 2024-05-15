import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Service } from '../model/service';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  totalLength: any;
  page:number = 1;
  searchValue: any;
  services: Service[] = [];
  selectedService: Service;
  successMessage: string;
  errorMessage: string;
  categories: Category[] = [];

  constructor(
    private serviceService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceService.findAll().subscribe(response => this.services = response);
    this.loadServices();
    this.loadCategories();
  }

  loadServices(){
    this.serviceService.findAll().subscribe(
      (services) => {
        this.services = services;
      },
      (errorResponse) => {
        console.error('', errorResponse);
      }
    )
  }

  loadCategories(){
    this.serviceService.findByTypeService().subscribe(
      (categories) => {
        this.categories = categories;
      },
      (errorResponse) => {
        console.error('', errorResponse);
      }
    )
  }

  getCategoryName(idCategory: string): string {
    const category = this.categories.find(cat => cat.id === idCategory);
    return category ? category.name : '';
  }

  createService(){
    this.router.navigate(['/service-form'])
  }

  confirmDeletion(service: Service){
    this.selectedService = service;
  }

  deleteService(){
    this.serviceService.delete(this.selectedService).subscribe(response => {
      this.successMessage = 'Serviço excluído com sucesso!';
      window.location.reload();
    },
    error => {
      console.error("Erro ao excluir serviço", error);
      this.errorMessage = "Erro ao ecluir serviço: " + error.message;
    }
  );
  }

}
