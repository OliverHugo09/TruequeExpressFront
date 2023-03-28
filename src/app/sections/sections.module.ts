import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './home/footer/footer.component';
import { FreetimeComponent } from './home/freetime/freetime.component';
import { SkillComponent } from './home/skill/skill.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { FormComponent } from './home/form/form.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { ListAboutmeComponent } from './admin/list-aboutme/list-aboutme.component';
import { ListFreetimeComponent } from './admin/list-freetime/list-freetime.component';
import { ListSkillComponent } from './admin/list-skill/list-skill.component';
import { ListExperienceComponent } from './admin/list-experience/list-experience.component';
import { ListContactComponent } from './admin/list-contact/list-contact.component';
import { AddFreetimeComponent } from './admin/add-freetime/add-freetime.component';
import { AddSkillComponent } from './admin/add-skill/add-skill.component';
import { AddExperienceComponent } from './admin/add-experience/add-experience.component';
import { EditAboutmeComponent } from './admin/edit-aboutme/edit-aboutme.component';
import { AddMediaComponent } from './admin/add-media/add-media.component';
import { ListMediaComponent } from './admin/list-media/list-media.component';
import { ListMainComponent } from './admin/list-main/list-main.component';

@NgModule({
  declarations: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent,
    NavbarAdminComponent,
    PanelAdminComponent,
    ListAboutmeComponent,
    ListFreetimeComponent,
    ListSkillComponent,
    ListExperienceComponent,
    ListContactComponent,
    AddFreetimeComponent,
    AddSkillComponent,
    AddExperienceComponent,
    EditAboutmeComponent,
    AddMediaComponent,
    ListMediaComponent,
    ListMainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent,
    NavbarAdminComponent,
    PanelAdminComponent,
  ]
})
export class SectionsModule { }
