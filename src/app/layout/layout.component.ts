import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { MenuItem } from '../shared/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/pages/dashboard',
      children: [],
    },
    {
      name: 'Mi Bandeja',
      icon: 'mark_email_unread',
      link: '/pages/bandeja',
      children: [
        {
          name: 'Bandeja de tareas',
          icon: 'email',
          link: '/pages/bandeja/bandeja-tareas',
          children: [],
        },
      ],
    },
    {
      name: 'Distribucion Carga',
      icon: 'developer_board',
      children: [
        {
          name: 'Spring',
          icon: 'cloud',
          link: '/spring',
          children: [],
        },
        {
          name: 'Hibernate',
          icon: 'storage',
          link: '/hibernate',
          children: [],
        },
        {
          name: 'Struts',
          icon: 'settings_input_svideo',
          link: '/struts',
          children: [],
        },
      ],
    },
    {
      name: 'Consultas',
      icon: 'manage_search',
      link: '/consultas',
      children: [],
    },
    {
      name: 'Tracking',
      icon: 'monitor_heart',
      link: '/tracking',
      children: [],
    },
    {
      name: 'Administracion',
      icon: 'settings_applications',
      link: '/administracion',
      children: [],
    },
  ];

  @ViewChild('drawer') drawer!: MatDrawer;
  isSidenavOpen = true;

  toggleSidenav() {
    this.drawer.toggle();
  }

  closeSidenav() {
    this.drawer.close();
  }
}
