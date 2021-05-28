import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
@ViewChild('mail', {static: true}) mail: ElementRef;
  interpolationBinding = 'Formulario de registro';
  propertyBinding = 'purple';
  oculto = true;

  newEmail = {
    email: '',
    title : 'Email',
  };

  newNombre = {
    name: '',
    title : 'Nombre',
    apellido: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  enviar($event){
    console.log($event);
    this.oculto = !this.oculto;
  }
  enviarDatos(mail){
    console.log(mail);
    const userMail = this.mail.nativeElement.value;
    console.log(userMail);
  }
}
