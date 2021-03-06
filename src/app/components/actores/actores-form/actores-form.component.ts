import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreationDTO } from '../interfaces/actorCreationDTO';

@Component({
  selector: 'app-actores-form',
  templateUrl: './actores-form.component.html',
  styleUrls: ['./actores-form.component.scss']
})
export class ActoresFormComponent implements OnInit {

  form !: FormGroup;

  @Input()
  modelo!:ActorCreationDTO;

  imagen64!:string;

  @Output()
  submit: EventEmitter<ActorCreationDTO> = new EventEmitter<ActorCreationDTO>()

  public initialForm = {
    nombre: ['',{
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }],
    fecha_nac: ['',{
      validators: [
        Validators.required
      ]
    }],
    foto: ''
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.initialForm);
    this.form.valueChanges.subscribe((values:any)=>{
      //console.log(values);
    })
    if(this.modelo){
      this.form.patchValue(this.modelo);
    }
    if(typeof(this.modelo.foto)==='string'){
      this.imagen64 = this.modelo.foto;
    }
  }

  getNameErrors(){
    const nombre = this.form.get('nombre');
    if(nombre?.hasError('required')){
      return "El nombre es requerido";
    }
    if(nombre?.hasError('minlength')){
      return "El nombre debe tener almenos 3 caracteres";
    }
    return null
  }

  getFechaErrors(){
    const fecha = this.form.get('fecha_nac');
    if(fecha?.hasError('required')){
      return "La fecha es Requerida";
    }
    return null;
  }

  saveChanges(){
    this.submit.emit(this.form.value)
    console.log(this.form.value);
  }

  pushImg(img:{img64:string,file:File}){
    this.imagen64 = img.img64;
    this.form.get('foto')?.setValue(img.file);
  }
}
