import { Component } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'banksmlweb';

  constructor(private icons:IconSetService, private route:Router){
    icons.icons = {...iconSubset};
    this.route.navigate(['/panel/client']);
  }

}
