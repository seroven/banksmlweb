import { Component, Input } from '@angular/core';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';

@Component({
  selector: 'app-panel-layout-header',
  templateUrl: './panel-layout-header.component.html',
  styleUrls: ['./panel-layout-header.component.scss']
})
export class PanelLayoutHeaderComponent extends HeaderComponent{
  @Input() sidebarId: string = "sidebar";

  constructor(private classToggler: ClassToggleService) {
    super();
  }
}
