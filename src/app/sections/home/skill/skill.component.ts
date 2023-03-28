import { Component, OnDestroy, OnInit } from '@angular/core';
import { Skill } from '../../../models/admin/skill';
import { SkillService } from '../../../service/admin/skill.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  skills: Skill[];

  constructor(private service: SkillService) { }

  ngOnInit(): void {
    const newSubs = this.service.getSkills().subscribe(
      next => this.skills = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}