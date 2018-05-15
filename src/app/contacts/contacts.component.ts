import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  pageContacts:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //console.log("Initialisation .....");
    this.http.get("http://localhost:8080/searchContacts?mc=fazazi")
      .map(resp => {
        resp.json();
      })
      .subscribe(data=>{
        this.pageContacts = data;
      }, err => {
        console.log("error");
      } )
  }

}
