import { Component} from '@angular/core';
import { Router} from '@angular/router';
  
@Component({
    selector: 'my-app',
    template: `<div>
                    <input type="button" value="Клиенты" class="btn btn-default" (click)="goHome()" />
                    <input type="button" value="Группы риска" class="btn btn-default" (click)="goGroups()" />
                    <router-outlet></router-outlet>
                    <a routerLink="/about">О программе</a>
               </div>`
})
export class AppComponent {
    constructor (private router: Router){ }

    goHome(){ this.router.navigate(['']);}

    goGroups(){ this.router.navigate(['/groups']); }
}