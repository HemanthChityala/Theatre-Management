import { Component, OnInit, ViewChild } from "@angular/core";
import { Theatre } from "../theatre";
import { theatreService } from "../theatre.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-addtheatre",
  templateUrl: "./addtheatre.component.html",
  styleUrls: ["./addtheatre.component.css"],
})
export class addtheatreComponent implements OnInit {
  @ViewChild("#frm")
  form: NgForm;
  /*********************************************************************
   *  Instance of Theatre for manupulation
   **********************************************************************/
  theatre: Theatre = new Theatre();

  info: String;
  errorInfo: String;

  /*********************************************************************
   * Method: constructor
   * params:
   * return:
   * Description: constructor injects the theatreService and router module
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/

  constructor(private theatreService: theatreService, private route: Router) {}

  ngOnInit(): void {}
  /********************************************************************************
   * Method: addtheatre
   * Description: this method call service addtheatres method and add theatres every time
   *              and routes the page to display all theatre detail after adding
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   **********************************************************************************/

  addTheatre() {
    this.theatreService.insertTheatres(this.theatre).subscribe(
      (data) => {
        this.theatre = data;

        console.log(this.theatre);
        this.info = data;
        this.errorInfo = undefined;
      },
      (error) => {
        this.info = undefined;
        this.errorInfo = error.error;
      }
    );
    this.route.navigateByUrl("/view");
  }
}
