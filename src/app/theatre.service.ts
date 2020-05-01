import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Theatre } from "./theatre";
import { Observable } from "rxjs";
import { stringify } from "querystring";

@Injectable({
  providedIn: "root",
})
export class theatreService {
  private theatres: Theatre[] = [];
  private baseUrl = "http://localhost:8085/theatre/";
  //flag:boolean=false;
  constructor(private http: HttpClient) {}

  /*********************************************************************
   * Method: loadTheatres
   * params:
   * return: Observable
   * Description: this method fetches the all theatres
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  loadTheatres(): Observable<any> {
    return this.http.get(`${this.baseUrl}/listalltheatres`);
  }
  /*********************************************************************
   * Method: setTheatres
   * params: theatre
   * return: void
   * Description:  this method is seting the values of theatre into the theatre array
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  setTheatres(theatres: Theatre[]): void {
    this.theatres = theatres;
  }
  /*********************************************************************
   * Method: getTheatres
   * params:
   * return: Theatre[]
   * Description: this methood is returning the theatre instance after seting
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  getTheatres(): Theatre[] {
    console.log(this.theatres);
    return this.theatres;
  }
  /*********************************************************************
   * Method: deleteTheatres
   * params: theatreId
   * return: Theatre[]
   * Description: this method is filtering the value which we not need
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  deleteTheatres(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, {
      responseType: "text",
    });
  }
  /*********************************************************************
   * Method: insertTheatre
   * params: theatre
   * return:
   * Description: this method pushing the data using theatre instance
   *
   * Created Date: 26 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  insertTheatres(theatre: Theatre): Observable<any> {
    return this.http.post(`${this.baseUrl}/theatredetails`, theatre, {
      responseType: "text",
    });
  }
  /*********************************************************************
   * Method: updateTheatres
   * params: theatreId
   * return: Theatre[]
   * Description: this method is updating the records already present.
   *
   * Created Date: 28 APR 2020
   * Author: Hemanth Reddy
   ************************************************************************/
  updateTheatre(theatre: Theatre): Observable<any> {
    let end = theatre.theatreId;
    const url = "http://localhost:8085/theatre/update/" + end;
    console.log(url);
    return this.http.put(url, theatre);
  }
}
