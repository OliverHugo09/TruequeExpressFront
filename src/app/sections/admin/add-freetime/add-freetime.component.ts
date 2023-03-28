import { Component, OnInit } from '@angular/core';
import { Freetime } from '../../../models/admin/freetime';
import { FreetimeService } from '../../../service/admin/freetime.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-add-freetime',
  templateUrl: './add-freetime.component.html',
  styleUrls: ['./add-freetime.component.css']
})
export class AddFreetimeComponent implements OnInit {

  freetime: Freetime = new Freetime();
  returnUrl = '/admin';

  constructor(
    private freetimeService: FreetimeService,
    private route: ActivatedRoute,
    private location: Location) { }

    ngOnInit() {
      this.freetimeService.getFreetimes().subscribe(next => this.freetime);
      let id = +this.route.snapshot.paramMap.get('id');
      this.createOrLoadProduct(id); 
    }
  
    createOrLoadProduct(id:number) {
      if (id == -1) {
        this.initProduct();
      } else {
        this.freetimeService.getFreetime(id).subscribe(
          next => this.freetime = next
        )
      }
    }
  
    initProduct() {
      this.freetime =  new Freetime({
        urlimg: 'https://via.placeholder.com/150x150'
      })
    }
  
  
    addFreetime() {
      if (this.freetime.id) {
        this.freetimeService.updateFreetime(this.freetime.id,this.freetime).subscribe(
          next => this.freetime = next,
          () => null,
          () => this.dataSaved()
        )
      } else {
        this.freetimeService.addFreetime(this.freetime).subscribe(
          next => this.freetime = next,
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
  
