import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoCreationDTO } from '../interfaces/generoCreationDTO';

@Component({
  selector: 'app-generos-edit',
  templateUrl: './generos-edit.component.html',
  styleUrls: ['./generos-edit.component.scss']
})
export class GenerosEditComponent implements OnInit {

  public modelo:generoCreationDTO = {
    nombre: 'Drama'
  }

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
