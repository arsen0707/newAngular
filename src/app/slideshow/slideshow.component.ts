import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['wing.jpg', 'library.jpg','mald.jpg'];
  headlines = [
  'Bring engineering to the next level',
  'Graduate with best knwoladge',
  'Work as Proffi'
  ]
  currentImg = 0;
  showImg = true;

  ngOnInit (){
    this.updateImg();
  }

  updateImg(){
    setInterval(()=>{
      this.currentImg++;
      this.currentImg = this.currentImg % this.images.length;
      this.showImg = false ;


      setTimeout(() => {
        this.showImg = true;
      }, 10);
    }, 4000)
  }
}
