import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tarea } from 'src/app/shared/tarea';

@Component({
  selector: 'app-bandeja',
  templateUrl: './bandeja.component.html',
  styleUrls: ['./bandeja.component.scss'],
})
export class BandejaComponent implements OnInit, AfterViewInit {
  formulario!: FormGroup;
  taskDisplayedColumns: string[] = [
    'id',
    'estacion',
    'requerimiento',
    'tipoCd',
    'cd',
    'cliente',
    'tipo',
    'producto',
    'accion',
  ];
  taskDataSource!: MatTableDataSource<Tarea>;
  incidentsDisplayedColumns: string[] = [
    'id',
    'estacion',
    'requerimiento',
    'tipoCd',
    'cd',
    'cliente',
    'tipo',
    'producto',
    'accion',
  ];
  incidentsDataSource!: MatTableDataSource<Tarea>;
  numberTasks: number = 0;
  numberIncidents: number = 0;
  selectedTab: string = 'taskTab'; // Por defecto, muestra la tabla de tareas

  @ViewChild('taskPaginator') taskPaginator!: MatPaginator;
  @ViewChild('incidentsPaginator') incidentsPaginator!: MatPaginator;

  @ViewChild('taskSort', { static: true }) taskSort!: MatSort;
  @ViewChild('incidentsSort', { static: true }) incidentsSort!: MatSort;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      cliente: ['', Validators.required],
      clienteSearch: ['', Validators.required],
      segmento: ['', Validators.required],
      subSegmento: ['', [Validators.required]],
      tipoCd: ['', Validators.required],
      tipoCdSearch: ['', Validators.required],
      tipoCdPadre: ['', Validators.required],
      tipoCdPadreSearch: ['', Validators.required],
      tipoProd: ['', Validators.required],
      producto: ['', Validators.required],
      requerimiento: ['', Validators.required],
      requerimientoAsoc: ['', Validators.required],
      os: ['', Validators.required],
      proyecto: ['', Validators.required],
      // Agrega más campos según sea necesario
    });
    this.createTables();
  }

  ngAfterViewInit() {
    this.taskDataSource.paginator = this.taskPaginator;
    this.incidentsDataSource.paginator = this.incidentsPaginator;
    this.taskDataSource.sort = this.taskSort;
    this.incidentsDataSource.sort = this.incidentsSort;
  }

  createTables() {
    this.taskDataSource = new MatTableDataSource(this.taskData);
    this.incidentsDataSource = new MatTableDataSource(this.incidentsData);

    this.numberTasks = this.taskData.length;
    this.numberIncidents = this.incidentsData.length;
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.taskDataSource.sort = this.taskSort;
    this.incidentsDataSource.sort = this.incidentsSort;
  }
  
  listSegments: string[] = [
    'Segmento 1',
    'Segmento 2',
    'Segmento 3',
    'Segmento 4',
    'Segmento 5',
    'Segmento 6',
    'Segmento 7',
    'Segmento 8',
    'Segmento 9',
    'Segmento 10',
  ];

  listSubSegments: string[] = [
    'SubSegmento 1',
    'SubSegmento 2',
    'SubSegmento 3',
    'SubSegmento 4',
    'SubSegmento 5',
    'SubSegmento 6',
    'SubSegmento 7',
    'SubSegmento 8',
    'SubSegmento 9',
    'SubSegmento 10',
  ];

  listCdTypes: string[] = [
    'Tipos CD 1',
    'Tipos CD 2',
    'Tipos CD 3',
    'Tipos CD 4',
    'Tipos CD 5',
    'Tipos CD 6',
    'Tipos CD 7',
    'Tipos CD 8',
    'Tipos CD 9',
    'Tipos CD 10',
  ];

  listParentCdTypes: string[] = [
    'Tipos CD Padre 1',
    'Tipos CD Padre 2',
    'Tipos CD Padre 3',
    'Tipos CD Padre 4',
    'Tipos CD Padre 5',
    'Tipos CD Padre 6',
    'Tipos CD Padre 7',
    'Tipos CD Padre 8',
    'Tipos CD Padre 9',
    'Tipos CD Padre 10',
  ];

  listProductTypes: string[] = [
    'Tipo de producto 1',
    'Tipo de producto 2',
    'Tipo de producto 3',
    'Tipo de producto4',
    'Tipo de producto 5',
    'Tipo de producto 6',
    'Tipo de producto 7',
    'Tipo de producto 8',
    'Tipo de producto 9',
    'Tipo de producto 10',
  ];

  listProducts: string[] = [
    'Producto 1',
    'Producto 2',
    'Producto 3',
    'Producto 4',
    'Producto 5',
    'Producto 6',
    'Producto 7',
    'Producto 8',
    'Producto 9',
    'Producto 10',
  ];

  listStations: string[] = [
    'Emision',
    'Programacion',
    'Centro Gestion',
    'Seguridad',
    'Instalacion',
    'Equipo',
    'Validacion',
  ];

  listTypesActions: string[] = ['Alta', 'Baja'];

  taskData: Tarea[] = [
    {
      id: 1,
      estacion: 'Emision',
      requerimiento: '00792010',
      tipoCd: 'CD',
      cd: '0102134',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 2,
      estacion: 'Emision',
      requerimiento: '00792012',
      tipoCd: 'CD',
      cd: '0102134',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 3,
      estacion: 'Emision',
      requerimiento: '00792013',
      tipoCd: 'CD',
      cd: '0102134',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 4,
      estacion: 'Programacion',
      requerimiento: '00792014',
      tipoCd: 'CD',
      cd: '0102135',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 5,
      estacion: 'Programacion',
      requerimiento: '00792015',
      tipoCd: 'CD',
      cd: '0102135',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 6,
      estacion: 'Centro Gestion',
      requerimiento: '00792015',
      tipoCd: 'CD',
      cd: '0102136',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 7,
      estacion: 'Seguridad',
      requerimiento: '00792016',
      tipoCd: 'CD',
      cd: '0102137',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 8,
      estacion: 'Instalacion',
      requerimiento: '00792016',
      tipoCd: 'CD',
      cd: '0102137',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 9,
      estacion: 'Equipo',
      requerimiento: '00792017',
      tipoCd: 'CD',
      cd: '0102138',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 10,
      estacion: 'Validacion',
      requerimiento: '00792017',
      tipoCd: 'CD',
      cd: '0102138',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
  ];

  incidentsData: Tarea[] = [
    {
      id: 2,
      estacion: 'Programacion',
      requerimiento: '00792012',
      tipoCd: 'CD',
      cd: '0102134',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },
    {
      id: 1,
      estacion: 'Emision',
      requerimiento: '00792010',
      tipoCd: 'CD',
      cd: '0102134',
      cliente: 'Banco de Credito',
      tipo: 'Datos',
      producto: 'InfoInternet',
      accion: 'Alta',
    },

  ];
}