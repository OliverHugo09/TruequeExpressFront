import { Component, OnInit } from '@angular/core';
import { Freetime } from '../../../models/admin/freetime';
import { FreetimeService } from '../../../service/admin/freetime.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-freetime',
  templateUrl: './list-freetime.component.html',
  styleUrls: ['./list-freetime.component.css']
})
export class ListFreetimeComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];
  freetimes: Freetime[];

  constructor(private service: FreetimeService) { }

  ngOnInit(): void {
    const newSubs = this.service.getFreetimes().subscribe(
      next => this.freetimes = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteFreetime(id:number){
    if(confirm('Delete this Freetime?')){
      const newSubs = this.service.deleteFreetime(id).subscribe(
        () => this.freetimes = this.freetimes.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    }
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
