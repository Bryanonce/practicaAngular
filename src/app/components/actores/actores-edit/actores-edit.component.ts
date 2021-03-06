import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorCreationDTO } from '../interfaces/actorCreationDTO';

@Component({
  selector: 'app-actores-edit',
  templateUrl: './actores-edit.component.html',
  styleUrls: ['./actores-edit.component.scss']
})
export class ActoresEditComponent implements OnInit {
  

  modelo: ActorCreationDTO = {nombre: 'Bryan', fecha_nac: new Date(2020,1,15), foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg/1200px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg'}

  constructor(
    private router: Router,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params.id);
    })
  }

  saveChanges(event:ActorCreationDTO){
    console.log(event);
    this.router.navigate(['/actores'])

  }

}
