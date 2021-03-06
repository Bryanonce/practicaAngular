import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(){

  }
  
  peliculasCines !: { titulo: string, fecha: Date, precio: number, poster:string }[]
  peliculasEstrenos !: {titulo:string, fecha:Date, precio: number, poster:string }[];
  ngOnInit(): void{
    setTimeout(()=>{
      this.peliculasCines = [
        {
          titulo: 'SpiderMan',
          fecha: new Date(),
          precio: 1400.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          titulo: 'Moana',
          fecha: new Date(2021,1,5),
          precio: 1200.99,
          poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
      ];
      this.peliculasEstrenos = [
        {
          titulo: 'SpiderMan',
          fecha: new Date(),
          precio: 1400.99,
          poster: 'https://m.media-amazon.com/images/M/MV5BNTMxOGI4OGMtMTgwMy00NmFjLWIyOTUtYjQ0OGQ4Mjk0YjNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
        },
        {
          titulo: 'Moana',
          fecha: new Date(2021,1,5),
          precio: 1200.99,
          poster: "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
      ];
    },500)

    
  }

  manejarRated(voto:number): void{
    alert(voto);
  }
  

}
