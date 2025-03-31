import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FloatLabelModule} from 'primeng/floatlabel';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modulo',
  imports: [
    FormsModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,
    ReactiveFormsModule,
  ],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent implements OnInit {
  form: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      moduloId: new FormControl(''),
      moduloNombre: new FormControl(''),
      moduloUrl: new FormControl(''),
      moduloIcono: new FormControl(''),
      moduloFecRegistro: new FormControl(''),
      moduloFecActu: new FormControl(''),
      moduloMcaInh: new FormControl(''),
      moduloInputArea: new FormControl('')
    });
  }

  operate() {

  }

}
