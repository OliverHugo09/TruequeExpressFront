import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../models/admin/experience';
import { ExperienceService } from '../../../service/admin/experience.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-experience',
  templateUrl: './list-experience.component.html',
  styleUrls: ['./list-experience.component.css']
})
export class ListExperienceComponent implements OnInit {

  private subscriptions: Array<Subscription> = [];
  experiences: Experience[];

  constructor(private service: ExperienceService) { }

   ngOnInit(): void {
    const newSubs = this.service.getExperiences().subscribe(
      next => this.experiences = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteExperience(id:number){
    if(confirm('Delete this Experience?')){
      const newSubs = this.service.deleteExperience(id).subscribe(
        () => this.experiences = this.experiences.filter( f => f.id != id)
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
