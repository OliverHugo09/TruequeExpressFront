import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/models/admin/aboutme';
import { AboutmeService } from 'src/app/service/admin/aboutme.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

  aboutme: Aboutme = new Aboutme();
  returnUrl = '/admin';

  constructor(
    private aboutmeService: AboutmeService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.aboutmeService.getAboutmes().subscribe(next => this.aboutme);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      this.initProduct();
    } else {
      this.aboutmeService.getAboutme(id).subscribe(
        next => this.aboutme = next
      )
    }
  }

  initProduct() {
    this.aboutme =  new Aboutme({
      urlimg: 'https://via.placeholder.com/150x150'
    })
  }


  addAboutme() {
    if (this.aboutme.id) {
      this.aboutmeService.updateAboutme(this.aboutme.id,this.aboutme).subscribe(
        next => this.aboutme = next,
        () => null,
        () => this.dataSaved()
      )
    } else {

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
