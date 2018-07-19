import { Component, OnInit} from '@angular/core';
import {TemplateRef, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import { HttpService } from '../http.service';
import { Group } from '../entity/group'


@Component({
    selector: 'groups-component',
    templateUrl: '../page/groups.component.html',
    providers: [HttpService]
})
export class GroupsComponent implements OnInit {
    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    groups: Array<Group>;
    editedGroup: Group;

    constructor(private serv: HttpService){
        this.groups = new Array<Group>();
    }

    ngOnInit(){
        this.loadGroups();
    }

    private loadGroups(){
        this.serv.getGroups().subscribe((data: Group[]) => {this.groups = data;});
    }

    loadTemplate(group: Group){
        if (this.editedGroup && this.editedGroup.id == group.id) {
            return this.editTemplate;
        } else return this.readOnlyTemplate;
    }

    deleteGroup(group: Group){
        if (this.editedGroup != null) return;
        this.serv.deleteGroup(group).subscribe();
        this.groups.splice(this.groups.indexOf(group), 1);
    }

    addGroup(){
        if (this.editedGroup != null) return;
        this.editedGroup = new Group();
        this.groups.push(this.editedGroup);
    }

    editGroup(group: Group){
        if (this.editedGroup != null) return;
        this.editedGroup = new Group();
        this.editedGroup.id = group.id;
        this.editedGroup.number = group.number;
        this.editedGroup.minValue = group.minValue;
        this.editedGroup.maxValue = group.maxValue;
    }

    testG: Group;
    saveGroup(){
        this.serv.addGroup(this.editedGroup).subscribe(
            (data: Group)=>{ this.loadGroups(); });
        this.editedGroup = null;
        this.loadGroups();
    }

    cancel(){
        this.editedGroup = null;
        this.loadGroups();
    }
 }