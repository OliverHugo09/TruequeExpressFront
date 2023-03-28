import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/admin/skill';
import { SkillService } from '../../../service/admin/skill.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

  skill: Skill = new Skill();
  returnUrl = '/admin';

  constructor(
    private skillService: SkillService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe(next => this.skill);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      this.initProduct();
    } else {
      this.skillService.getSkill(id).subscribe(
        next => this.skill = next
      )
    }
  }

  initProduct() {
    this.skill =  new Skill({
      urlimg: 'https://via.placeholder.com/150x150'
    })
  }


  addSkill() {
    if (this.skill.id) {
      this.skillService.updateSkill(this.skill.id,this.skill).subscribe(
        next => this.skill = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.skillService.addSkill(this.skill).subscribe(
        next => this.skill = next,
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
