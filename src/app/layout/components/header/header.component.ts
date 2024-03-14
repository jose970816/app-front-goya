import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();

  constructor() { }

  onToggleSidenav(): void {
    this.toggleSidenav.emit();
  }
  
}
