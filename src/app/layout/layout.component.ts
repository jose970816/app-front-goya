import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuItem } from '../shared/menu';
 
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent{
  private breakpointObserver = inject(BreakpointObserver);

  menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      link: '/pages/dashboard',
      children: []
    },
    {
      name: 'Mi Bandeja',
      icon: 'mark_email_unread',
      link: '/pages/bandeja',
      children: []
    },
    {
      name: 'Distribucion Carga',
      icon: 'developer_board',
      children: [
        {
          name: 'Spring',
          icon: 'cloud',
          link: '/spring',
          children: []
        },
        {
          name: 'Hibernate',
          icon: 'storage',
          link: '/hibernate',
          children: []
        },
        {
          name: 'Struts',
          icon: 'settings_input_svideo',
          link: '/struts',
          children: []
        }
      ]
    },
    {
      name: 'Consultas',
      icon: 'manage_search',
      link: '/consultas',
      children: []
    },
    {
      name: 'Tracking',
      icon: 'monitor_heart',
      link: '/tracking',
      children: []
    },
    {
      name: 'Administracion',
      icon: 'settings_applications',
      link: '/administracion',
      children: []
    },
  ];
  
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

}
