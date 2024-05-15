import { Component, OnInit } from "@angular/core";
import { ClientService } from "../service/client.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Observable } from "rxjs";
import { Client } from "../model/client";

@Component({
  selector: "app-form",
  templateUrl: "./client-form.component.html",
  styleUrls: ["./client-form.component.css"],
})
export class ClientFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: string[];
  id: string;

  clients: Client[] = [];
  selectedClient: Client;
  successMessage: string;
  errorMessage: string;

  constructor(
    private service: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.client = new Client();
  }

  ngOnInit(): void {

    let params: Observable<Params> = this.activatedRoute.params;
    params.subscribe((urlParams) => {
      this.id = urlParams["id"];
      if (this.id) {
        this.service.getById(this.id).subscribe(
          (response) => (this.client = response),
          (errorResponse) => (this.client = new Client())
        );
      }
    });
  }

  returnList() {
    this.router.navigate(["/client-list"]);
  }

  onSubmit() {
    if (this.id) {
      this.service.update(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
        },
        (errorResponse) => {
          this.errors = ["Erro ao Atualizar Cliente"];
        }
      );
    } else {
      this.service.save(this.client).subscribe(
        (response) => {
          this.success = true;
          this.errors = null;
          this.client = response;
        },
        (errorResponse) => {
          this.success = false;
          this.errors = errorResponse.error;
          console.log(errorResponse.error);
        }
      );
    }
  }

  confirmDeletion(client : Client) {
    this.selectedClient = client;
  }

  deleteClient() {
    this.service.deleteId(this.selectedClient)
      .subscribe(
          response => {
            this.successMessage = 'Cliente excluído com sucesso!';
            // Recarregar a página
            window.location.reload();
          },
          error => {
            console.error('Erro ao excluir cliente:', error);
            this.errorMessage = 'Erro ao excluir cliente: ' + error.message;
          }
      );
  }
}
