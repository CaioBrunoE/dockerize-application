import { Component, OnInit } from '@angular/core';

import { ClientService } from 'src/app/client/service/client.service';
import { Router } from '@angular/router';
import { Client } from '../model/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  totalLength: any;
  page: number = 1;

  searchValue: any;

  clients: Client[] = [];

  constructor(private service: ClientService, private router: Router) {}

  ngOnInit(): void {
    this.service.findAll().subscribe((response) => (this.clients = response));
  }

  createClient() {
    this.router.navigate(['/client-form']);
  }
}
