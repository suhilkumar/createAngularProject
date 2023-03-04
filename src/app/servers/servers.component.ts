import { ViewEncapsulation } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  // you can also write selector as 
  // attribute selector
  // selector: '[app-servers]', and html <div app-servers><div>

  // class selector
  // selector: '.app-servers',
  // and html <div class="app-server"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  
  


})
export class ServersComponent {

}
