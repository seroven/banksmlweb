import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ListPageComponent } from "./pages/list-page/list-page.component";


const routes:Route[] = [
  {
    path: '',
    component: ListPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {
  
}