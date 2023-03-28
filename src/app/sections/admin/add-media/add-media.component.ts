import { Component, OnInit } from '@angular/core';
import { Media } from '../../../models/admin/media';
import { MediaService } from '../../../service/admin/media.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-media',
  templateUrl: './add-media.component.html',
  styleUrls: ['./add-media.component.css']
})
export class AddMediaComponent implements OnInit {

  media: Media = new Media();
  returnUrl = '/admin';

  constructor(
    private mediaService: MediaService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.mediaService.getMedias().subscribe(next => this.media);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      this.initProduct();
    } else {
      this.mediaService.getMedia(id).subscribe(
        next => this.media = next
      )
    }
  }

  initProduct() {
    this.media =  new Media({
      urlimg: 'https://via.placeholder.com/150x150'
    })
  }


  addMedia() {
    if (this.media.id) {
      this.mediaService.updateMedia(this.media.id,this.media).subscribe(
        next => this.media = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.mediaService.addMedia(this.media).subscribe(
        next => this.media = next,
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

