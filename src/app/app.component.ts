import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Welcome to Theatre Managment!";

  constructor(private route: Router) {}
  public sorting: string = "Ascending";
  ngOnInit(): void {
    this.route.navigateByUrl("/view");
  }
}
