import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Client } from './entity/client';
import { Group } from './entity/group';
import { RequestBodyAddClient } from './entity/reqestBodyAddClient';

  
@Injectable()
export class HttpService{
  
    private url = 'http://localhost:8081/';
    constructor(private http: HttpClient){ }
    
    postData(query: string){
        return this.http.post(this.url, query);
    }

    getClientAll(){
        return this.http.get(this.url + 'client/get/all');
    }

    getClient(id: number){
        return this.http.get(this.url + 'client/get/'+ id);
    }

    getClientHistory(id: number){
        return this.http.get(this.url + 'client/get/history/'+ id);   
    }

    addClient(client: Client, groupID: number){
        return this.http.post(this.url + 'client/add', new RequestBodyAddClient(client, groupID));    
    }

    deleteClient(id: number){
        return this.http.get(this.url + 'client/delete/'+ id);
    }


    ////GROUPS////
    getGroups(){
        return this.http.get(this.url + 'group/get');
    }

    addGroup(group: Group){
        return this.http.post(this.url + 'group/add', group);
    }

    deleteGroup(group: Group){
        return this.http.get(this.url + 'group/delete/' + group.id);
    }
    ////GROUPS////
}