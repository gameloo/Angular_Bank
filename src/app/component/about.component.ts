import { Component} from '@angular/core';
  
@Component({
    selector: 'about-app',
    template: `<h3>О программе</h3>
                <td>В разработке участвовали: Федоров Павел, Александр Фирсов, Лариса Черемисина</td> <br />
                <a href= "https://github.com/gameloo/Angular_Bank">GitHub репозиторий программы</a><br />
                <a href= "https://github.com/gameloo/REST_Bank">GitHub репозиторий REST сервиса</a><br />`
})
export class AboutComponent { }