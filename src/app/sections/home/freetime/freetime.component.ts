import { Component, OnInit, OnDestroy } from '@angular/core';
import { Freetime } from '../../../models/admin/freetime';
import { FreetimeService } from '../../../service/admin/freetime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-freetime',
  templateUrl: './freetime.component.html',
  styleUrls: ['./freetime.component.css']
})
export class FreetimeComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  freetimes: Freetime[];

  constructor(private service: FreetimeService) { }

  ngOnInit(): void {
    const newSubs = this.service.getFreetimes().subscribe(
      next => this.freetimes = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}