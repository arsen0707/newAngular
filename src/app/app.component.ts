import { ThisReceiver } from '@angular/compiler';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['wing.jpg', 'elep.jpg','mald.jpg'];
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
      }, 100);
    }, 4000)
  }
}
