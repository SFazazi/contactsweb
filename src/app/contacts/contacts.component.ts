import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";

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
    this.http.get<JSON>("http://localhost:8080/searchContacts?mc=fazazi")
      .map(res => res.)
      .subscribe(data=>{
        this.pageContacts = data;
      }, err => {
        console.log("error");
      } )
  }

}
