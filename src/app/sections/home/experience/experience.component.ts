import { Component, OnDestroy, OnInit } from '@angular/core';
import { Experience } from '../../../models/admin/experience';
import { ExperienceService } from '../../../service/admin/experience.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  experiences: Experience[];

  constructor(private service: ExperienceService) { }

  ngOnInit(): void {
    const newSubs = this.service.getExperiences().subscribe(
      next => this.experiences = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}