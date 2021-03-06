import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreationDTO } from '../interfaces/generoCreationDTO';


@Component({
  selector: 'app-generos-create',
  templateUrl: './generos-create.component.html',
  styleUrls: ['./generos-create.component.scss']
})
export class GenerosCreateComponent implements OnInit {
  
  constructor(
    private router:Router
  ){

  }

  ngOnInit(): void {
    
  }

  saveChanges(event:generoCreationDTO){
    console.log(event);
    this.router.navigate(['/generos'])
  }


  


}
