import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {Divider} from 'primeng/divider';
import {FloatLabel} from 'primeng/floatlabel';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FloatLabelModule} from 'primeng/floatlabel';
import {ToggleSwitch} from 'primeng/toggleswitch';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modulo',
  imports: [
    Button,
    Divider,
    FloatLabel,
    FormsModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,
    ReactiveFormsModule,
    ToggleSwitch
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
