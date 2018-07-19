import { Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

import {Client} from '../entity/client';
import { Group } from '../entity/group';
  
@Component({
    selector: 'Create-app',
    templateUrl: '../page/clientCreate.component.html',
    providers: [HttpService]
})
export class ClientCreateComponent implements OnInit {

    client: Client;
    selectedGroup: number;
    dob: Date;

    groups: Array<Group>;

    constructor(private srv: HttpService){  }

    ngOnInit(){
        this.client = new Client(0,'','','',0,0);
        this.groups = new Array<Group>();
        this.dob = new Date();
        this.srv.getGroups().subscribe((data: Group[])=>(this.groups = data));

    }

    save(){
        this.client.dob = new Date(this.dob).getTime();
        this.srv.addClient(this.client,this.selectedGroup).subscribe(
            (data: Object) =>
            {
                this.client = new Client(0,'','','',0,0);
                this.dob = new Date();
            }
        );
    }







 }