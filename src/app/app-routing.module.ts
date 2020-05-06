import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { addtheatreComponent } from "./addtheatre/addtheatre.component";
import { ViewtheatreComponent } from "./viewtheatre/viewtheatre.component";

const routes: Routes = [
  { path: "", component: ViewtheatreComponent },

  { path: "add", component: addtheatreComponent },
  { path: "view", component: ViewtheatreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
