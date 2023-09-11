import { Component } from '@angular/core';
import { navItems } from './data/items';

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent {
  public navItems;

  constructor(){
    this.navItems = navItems;

  }

}
