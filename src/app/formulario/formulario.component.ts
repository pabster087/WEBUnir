import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {

  interpolationBinding = 'Formulario de registro';
  propertyBinding = 'purple';
  oculto = false;

  newEmail = {
    email: '',
    title : 'Email',
  };

  constructor() { }

  ngOnInit(): void {
  }

  enviar($event){
    console.log($event);
    this.oculto = !this.oculto;
  }

}
