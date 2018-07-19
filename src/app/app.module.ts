import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { HomeComponent } from './component/home.component';
import { GroupsComponent } from './component/groups.component';
import { ClientInfoComponent } from './component/clientInfo.component';
import { ClientCreateComponent } from './component/clientCreate.component';
import { AppComponent }   from './app.component';
import { AboutComponent }   from './component/about.component';


const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'groups', component: GroupsComponent},
    { path: 'clientInfo', component: ClientInfoComponent},
    { path: 'clientAdd', component: ClientCreateComponent},
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, HomeComponent, AboutComponent, GroupsComponent, ClientCreateComponent, ClientInfoComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
