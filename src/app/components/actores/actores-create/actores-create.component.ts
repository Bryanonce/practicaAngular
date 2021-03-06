import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorCreationDTO } from '../interfaces/actorCreationDTO';

@Component({
  selector: 'app-actores-create',
  templateUrl: './actores-create.component.html',
  styleUrls: ['./actores-create.component.scss']
})
export class ActoresCreateComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveChanges(event:ActorCreationDTO){
    console.log(event);
    //this.router.navigate(['/actores'])

  }

}
