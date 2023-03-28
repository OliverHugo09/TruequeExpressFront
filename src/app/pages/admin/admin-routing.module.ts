import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { ListAboutmeComponent } from '../../sections/admin/list-aboutme/list-aboutme.component'
import { ListFreetimeComponent } from '../../sections/admin/list-freetime/list-freetime.component'
import { ListSkillComponent } from '../../sections/admin/list-skill/list-skill.component';
import { ListExperienceComponent } from '../../sections/admin/list-experience/list-experience.component';
import { ListContactComponent } from '../../sections/admin/list-contact/list-contact.component';
import { AddSkillComponent } from '../../sections/admin/add-skill/add-skill.component';
import { AddExperienceComponent } from '../../sections/admin/add-experience/add-experience.component';
import { EditAboutmeComponent } from '../../sections/admin/edit-aboutme/edit-aboutme.component';
import { AddFreetimeComponent } from '../../sections/admin/add-freetime/add-freetime.component';
import { ListMediaComponent } from '../../sections/admin/list-media/list-media.component';
import { AddMediaComponent } from '../../sections/admin/add-media/add-media.component';
import { ListMainComponent } from '../../sections/admin/list-main/list-main.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'list-about-me', component: ListAboutmeComponent },
  { path: 'list-freetime', component: ListFreetimeComponent },
  { path: 'list-skills', component: ListSkillComponent },
  { path: 'list-experience', component: ListExperienceComponent },
  { path: 'list-contact', component: ListContactComponent },
  { path: 'list-media', component: ListMediaComponent },
  { path: 'list-main', component: ListMainComponent },
  { path: 'skill/:id', component: AddSkillComponent },
  { path: 'experience/:id', component: AddExperienceComponent },
  { path: 'aboutme/:id', component: EditAboutmeComponent },
  { path: 'freetime/:id', component: AddFreetimeComponent },
  { path: 'media/:id', component: AddMediaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
