import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { addtheatreComponent } from "./addtheatre/addtheatre.component";
import { ViewtheatreComponent } from "./viewtheatre/viewtheatre.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [AppComponent, addtheatreComponent, ViewtheatreComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
