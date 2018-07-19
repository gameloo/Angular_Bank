import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Client} from '../entity/client';
import {HttpService} from '../http.service';
import { Group } from '../entity/group';
import { History } from '../entity/history';

@Component({
    selector: 'info-app',
    templateUrl: '../page/clientInfo.component.html',
    providers: [HttpService]
})
export class ClientInfoComponent implements OnInit { 

    id: number;
    client: Client;
    selectedGroup: number;
    dob: Date;

    history: Array<History>;
    groups: Array<Group>;
    

    private routeSubscription: Subscription;
    constructor(private route: ActivatedRoute, private srv: HttpService){   
        this.routeSubscription = route.queryParams.subscribe(
            params=>this.id=params['id']);
    }
    ngOnInit(){
        this.client = new Client(0,'','','',0,0);
        this.groups = new Array<Group>();
        this.history = new Array<History>();
        this.addItem();
    }
    
    addItem(){
        this.srv.getClient(this.id).subscribe((data: Client)=>{
            this.client = data;
            this.dob = new Date(this.client.dob);
        });
        this.srv.getGroups().subscribe((data: Group[])=>(this.groups = data));
        this.srv.getClientHistory(this.id).subscribe(
            (data: History[])=>{
                this.history = data;
                this.selectedGroup = this.history[this.history.length - 1].group.id;
            }
        );
    }

    saveChanges(){
        this.client.dob = new Date(this.dob).getTime();
        this.srv.addClient(this.client,this.selectedGroup).subscribe(()=>{this.addItem();});
    }

}