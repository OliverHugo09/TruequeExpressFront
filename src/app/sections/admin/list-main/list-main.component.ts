import { Component, OnDestroy, OnInit } from '@angular/core';
import { Main } from '../../../models/admin/main';
import { MainService } from '../../../service/admin/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  styleUrls: ['./list-main.component.css']
})
export class ListMainComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  mains: Main[];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    var newSubs = this.service.getMains().subscribe(
      next => this.mains = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
