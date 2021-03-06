import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { toBase64 } from '../helpers/helpers';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.scss']
})
export class InputImgComponent implements OnInit {

  @Output()
  img : EventEmitter<{img64:string,file:File}> = new EventEmitter<{img64:string,file:File}>();

  constructor() { }

  ngOnInit(): void {
  }

  inputChange(event:any){
    if(event.target.files.length > 0){
      const file:File = event.target.files[0];
      toBase64(file)
      .then((value:string)=>{
        this.img.emit({img64:value,file:file});
      })
      .catch((value:string)=>{
        console.log(value);
      })
    }
  }

}
