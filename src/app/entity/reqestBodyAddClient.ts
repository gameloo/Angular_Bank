import { Client } from './client';
import { Group } from './group';

export class RequestBodyAddClient{
    client: Client;
    groupID: number;

    constructor(client: Client, groupID: number){
        this.client = client;
        this.groupID = groupID;
    }
}