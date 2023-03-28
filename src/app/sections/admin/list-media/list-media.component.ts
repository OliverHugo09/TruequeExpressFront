import { Component, OnInit, OnDestroy } from '@angular/core';
import { Media } from 'src/app/models/admin/media';
import { MediaService } from 'src/app/service/admin/media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.css']
})
export class ListMediaComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  medias: Media[];

  constructor(private service: MediaService) { }

  ngOnInit(): void {
    const newSubs = this.service.getMedias().subscribe(
      next => this.medias = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteMedia(id:number){
    if(confirm('Delete this media?')){
      const newSubs = this.service.deleteMedia(id).subscribe(
        () => this.medias = this.medias.filter( f => f.id != id)
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
