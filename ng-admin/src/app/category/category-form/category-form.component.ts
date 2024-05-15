import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../service/category.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category;
  success: boolean = false;
  errors: string[];
  id: string;

  categories: Category[] = [];
  selectedCategory: Category;
  successMessage: string;
  errorMessage: string;


  constructor(
    private service: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.category = new Category();
    }

  ngOnInit(): void {
    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.category = response),
          (errorResponse) => (this.category = new Category())
        );
      }
    });
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.category).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar categoria"];
        }
      );
    } else {
      this.service.save(this.category).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.category = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }

  confirmDeletion(category : Category) {
    this.selectedCategory = category;
  }

  deleteCategory() {
    this.service.deleteId(this.selectedCategory)
      .subscribe(
          response => {
            this.successMessage = 'Categoria excluída com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir categoria:', error);
            this.errorMessage = 'Erro ao excluir categoria: ' + error.message;
          }
      );
  }

  returnList() {
    this.router.navigate(['/listCategory'])
  }

}
