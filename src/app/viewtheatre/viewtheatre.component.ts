import { Component, OnInit, ViewChild } from "@angular/core";
import { Theatre } from "../theatre";
import { theatreService } from "../theatre.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-viewtheatre",
  templateUrl: "./viewtheatre.component.html",
  styleUrls: ["./viewtheatre.component.css"],
})
export class ViewtheatreComponent implements OnInit {
  @ViewChild("#frm")
  form: NgForm;
  message: any;
  successFlag = false;
  errorFlag = false;
  /**************************************************************************
   * creating theatres array of Theatre type to store the theatre detail 
  /**************************************************************************/
  theatres: Theatre[] = [];

  /*************************************************************************
   * creating theatre instance for every time manupulate the data
   *************************************************************************/

  theatre: Theatre = new Theatre();
  /*************************************************************************
   * seting the flag false after enter the data it will ture and usable
   ************************************************************************/
  editFlag: boolean = false;
  constructor(private theatreService: theatreService) {}

  /*********************************************************************
   * Method: ngOnInit is life cycle hook called by angular at first
   * Description: ngOnInit first check the falg value if it is true then check
   *              and loads all the theatre in the starting and it is
   *              checking if theatre array length is zero then load theatre
   *              and set the theatre into the current array
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  ngOnInit() {
    console.log("inside ngOninit viewtheatre component");
    this.theatreService.loadTheatres().subscribe(
      (data) => {
        this.theatres = data;
        this.theatreService.setTheatres(this.theatres);
        this.errorFlag = false;
        this.successFlag = true;
      },
      (error) => {
        this.message = error.error;
        this.successFlag = false;
        this.errorFlag = true;
      }
    );
  }

  /*********************************************************************
   * Method: removeTheatre
   * params: theatreId
   * return: void
   * Description: this method collecting the value from service deleteTheatres method
   *              and delete the specific theatre
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  removeTheatre(theatreId: number): void {
    console.log("inside removetheatre viewtheatre component :" + theatreId);
    this.theatreService.deleteTheatres(theatreId).subscribe((data) => {
      this.ngOnInit();
    });
  }

  /*********************************************************************
   * Method: updateTheatre
   * params: theatreId
   * Description: this method is updating the theatre after deleting a row
   *
   * Created Date: 28 Apr 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  //updateTheatre(theatre.theatreId)
  updateTheatre(theatreId: number) {
    let tmptheatres: Theatre[] = this.theatreService
      .getTheatres()
      .filter((theatre) => theatre.theatreId == theatreId);
    if (tmptheatres.length > 0) {
      this.theatre = tmptheatres[0];
      this.editFlag = true;
    }
  }
  /*********************************************************************
   * Method: editTheatre
   * return: void
   * Description: this method is just checking the flag value for enable the
   *              form
   *
   * Created Date: 28 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  editTheatre(): void {
    this.theatreService.updateTheatre(this.theatre).subscribe((data) => {
      console.log(data);
    });
    console.log(this.theatre);
    this.editFlag = false;
  }
}
