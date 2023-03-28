import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../../../models/admin/contact';
import { ContactService } from '../../../service/admin/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  contacts: Contact[];

  constructor(private serviceContact: ContactService) { }

  ngOnInit(): void {
    const newSubs = this.serviceContact.getContacts().subscribe(
      next => this.contacts = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
