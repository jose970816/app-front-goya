import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/shared/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  
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
  
  @Input() step?: number;
  @Input() isSidenavOpen?: boolean;

  setStep(index: number) {
    this.step = index;
  }
}
