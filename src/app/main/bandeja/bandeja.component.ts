import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss']
})
export class BandejaComponent {
  formulario!: FormGroup; // Asegúrate de declarar el tipo de la variable

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      cliente: ['', Validators.required],
      clienteSearch: ['', Validators.required],
      segmento: ['', Validators.required],
      subSegmento: ['', [Validators.required, Validators.email]],
      tipoCd: ['', Validators.required],
      tipoCdSearch: ['', Validators.required],
      tipoCdPadre: ['', Validators.required],
      tipoCdPadreSearch: ['', Validators.required],
      tipoProd: ['', Validators.required],
      producto: ['', Validators.required],
      requerimiento: ['', Validators.required]
      // Agrega más campos según sea necesario
    });
  }
}
