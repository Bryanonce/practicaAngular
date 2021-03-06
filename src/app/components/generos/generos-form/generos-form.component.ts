import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {capitalizeLetter} from '../../utilities/validadores/capitalizeLetter';
import { generoCreationDTO } from '../interfaces/generoCreationDTO';


@Component({
  selector: 'app-generos-form',
  templateUrl: './generos-form.component.html',
  styleUrls: ['./generos-form.component.scss']
})
export class GenerosFormComponent implements OnInit {

  form !: FormGroup;

  @Input()
  modelo !: generoCreationDTO;

  @Output()
  submit: EventEmitter<generoCreationDTO> = new EventEmitter<generoCreationDTO>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          capitalizeLetter()
        ]
      }]
    })
    if(this.modelo){
      this.form.patchValue(this.modelo);
    } 
  }

  obtenerErrorCampoNombre(){
    let nombre = this.form.get('nombre');
    if(nombre?.hasError('required')){
      return 'El Campo Nombre es requerido'
    }
    if(nombre?.hasError('minlength')){
      return 'El campo debe tener almenos 3 caracteres'
    }

    if(nombre?.hasError('capitalizeLetter')){
      return nombre.getError('capitalizeLetter').msj;
    }
    return '';
  }

  saveChanges(){
    this.submit.emit(this.form.value);
  }

}
