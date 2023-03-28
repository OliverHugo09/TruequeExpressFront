import { Component, OnDestroy, OnInit } from '@angular/core';
import { Media } from 'src/app/models/admin/media';
import { MediaService } from 'src/app/service/admin/media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  medias: Media[];

  constructor(private service: MediaService) { }

  ngOnInit(): void {
    const newSubs = this.service.getMedias().subscribe(
      next => this.medias = next
    );
    this.subscriptions.push(newSubs);
  }
  
  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
