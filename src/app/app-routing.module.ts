import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelLayoutComponent } from './layout/panel-layout/panel-layout.component';

const routes: Routes = [
  {
    path: 'panel',
    component: PanelLayoutComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'agent',
        loadChildren: () => import('./modules/agent/agent.module').then(m => m.AgentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
