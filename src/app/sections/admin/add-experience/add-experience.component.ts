import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../models/admin/experience';
import { ExperienceService } from '../../../service/admin/experience.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  experience: Experience = new Experience();
  returnUrl = '/admin';

  constructor(
    private experienceService: ExperienceService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.experienceService.getExperiences().subscribe(next => this.experience);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      this.initProduct();
    } else {
      this.experienceService.getExperience(id).subscribe(
        next => this.experience = next
      )
    }
  }

  initProduct() {
    this.experience =  new Experience({
      urlimg: 'https://via.placeholder.com/150x150'
    })
  }


  addExperience() {
    if (this.experience.id) {
      this.experienceService.updateExperience(this.experience.id,this.experience).subscribe(
        next => this.experience = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.experienceService.addExperience(this.experience).subscribe(
        next => this.experience = next,
        () => null,
        () => this.dataSaved()
      )
    }
  }

  dataSaved() {
    this.goBack();
  }

  cancel() {
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
