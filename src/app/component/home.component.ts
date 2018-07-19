import { Component, OnInit} from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { HttpService } from '../http.service';
import { Client } from '../entity/client';
  
@Component({
    selector: 'home-app',
    templateUrl: '../page/home.component.html',
    providers: [HttpService]
})
export class HomeComponent implements OnInit {
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;

    clients: Array<Client>;
    editedClient: Client;

    constructor(private serv: HttpService, private router: Router){
         this.clients = new Array<Client>(); 
        }

    ngOnInit(){
        this.loadClients();
    }

    private loadClients(){
        this.serv.getClientAll().subscribe((data: Client[]) => {this.clients = data;});
    }

    loadTemplate(client: Client){
        return this.readOnlyTemplate;
    }

    goInfoClient(client: Client){
        this.router.navigate(
            ['/clientInfo'],
            {
                queryParams: {'id': client.id }
            }
        );
    }

    goAddNewClient(){
        this.router.navigate(['/clientAdd']);
    }

    deleteClient(client: Client){
        this.serv.deleteClient(client.id).subscribe();
        this.clients.splice(this.clients.indexOf(client), 1);
    }

 }
