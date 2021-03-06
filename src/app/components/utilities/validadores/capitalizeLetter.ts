import { AbstractControl, ValidatorFn } from "@angular/forms";

export function capitalizeLetter(): ValidatorFn{
    return (control: AbstractControl)=>{
        const valor = <string>control.value;
        if(!valor) return null;
        if(valor.length === 0) return null;
        const firstLetter = valor[0];
        if(firstLetter !== firstLetter.toUpperCase()){
            return {
                capitalizeLetter:{
                    msj: 'La primera letra debe ser mayuscula'
                }
            }
        }
        return null;
    }
    
}