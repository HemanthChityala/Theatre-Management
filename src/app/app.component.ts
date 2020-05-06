import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "WELCOME TO ONLINE MOVIE TICKET BOOKING SYSTEM";

  submitted: boolean = false;

  constructor(private router: Router) {}
  public sorting: string = "Ascending";
  ngOnInit(): void {
    this.router.navigate(["/view"]);
  }
}
