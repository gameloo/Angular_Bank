import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home.component';
import { GroupsComponent } from './groups.component';
import { ClientInfoComponent } from './clientInfo.component';
import { ClientCreateComponent } from './clientCreate.component';
import { AboutComponent } from './about.component';
import { HttpService } from '../http.service';

@NgModule({
        imports:      [ BrowserModule, FormsModule, RouterModule, HttpService],
        declarations: [ HomeComponent, ClientInfoComponent, ClientCreateComponent, GroupsComponent, AboutComponent],
        exports: [ClientInfoComponent, ClientCreateComponent, GroupsComponent, HomeComponent, AboutComponent]
    
})

export class ComponentModule{}