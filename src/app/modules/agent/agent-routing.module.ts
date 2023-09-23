import { NgModule } from "@angular/core";
import { Router, Route, RouterModule } from "@angular/router";
import { ListPageComponent } from "./pages/list-page/list-page.component";

const route:Route[] = [
  {
    path: '',
    component: ListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AgentRoutingModule{}