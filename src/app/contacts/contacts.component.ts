import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contact = {name: "Fazazi", mail: "fazazi@outlook.com"};

  constructor() { }

  ngOnInit() {
  }

}
