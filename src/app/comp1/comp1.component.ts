import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit, OnDestroy{
    timeInterval: any;
    message="";
    ngOnInit(){
      this.timeInterval= setInterval(()=>{
        this.message="This Message will show after every minute"
        setTimeout(()=>{
          this.message='';
        },2000)
      },60000);
    }
    ngOnDestroy(){
      clearInterval(this.timeInterval)
    }
  

}
