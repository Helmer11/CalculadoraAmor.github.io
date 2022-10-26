import { Component } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Calculadora Amor';
  formDatos!: FormGroup;
  datos!: Parejas;
  loading: boolean = false;

  constructor(private _servis: AppService, private _formB: FormBuilder ){
  }

ngOnInit() {
   this.getForm();
}

getForm(){
  this.formDatos = this._formB.group({
    Chica:new FormControl('', [Validators.required]),
    Chico: new FormControl('', [Validators.required])
   })
}

  getParejas(){
    let data = {
      chica: this.formDatos.value.Chica,
      chico: this.formDatos.value.Chico
    }

    this.loading = true;
    setTimeout(() => {
      this._servis.getPorcentage(data).subscribe(res =>{
        this.datos = res as Parejas ;
      })
    this.loading = false;
    }, 3000);
  }

  limpiar(){

    this.formDatos.patchValue({
      Chica: '',
      Chico: ''
    })
      window.location.reload();
  }

}


export interface Parejas{
  fname?: string,
  sname?: string,
  percentage?: string,
  result?: string
}
