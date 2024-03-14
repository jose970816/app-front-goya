import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, map, shareReplay } from 'rxjs';
import { MenuItem } from 'src/app/shared/menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  private breakpointObserver = inject(BreakpointObserver);

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
  @Input() isSidenavOpen?: boolean = true;
  
  setStep(index: number) {
    this.step = index;
  }

  @Output() closeSidenav: EventEmitter<void> = new EventEmitter<void>();

  onCloseSidenav(): void {
    this.closeSidenav.emit();
  }
  /*
  @Input() step?: number;
  
  setStep(index: number) {
    this.step = index;
  }

  @Input() menuItems!: MenuItem[];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );*/

}
