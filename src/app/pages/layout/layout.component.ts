import {Component, OnInit, ViewChild} from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import {OverlayBadgeModule} from 'primeng/overlaybadge';
import {MenuItem} from 'primeng/api';
import {TieredMenu} from 'primeng/tieredmenu';
import {ButtonModule} from 'primeng/button';
import {Drawer, DrawerModule} from 'primeng/drawer';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    AvatarModule, OverlayBadgeModule
    , TieredMenu, ButtonModule,
    DrawerModule, RouterLink, RouterLinkActive, RouterOutlet
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  p_usuario: string | undefined;
  p_number: number | undefined;
  items: MenuItem[] | undefined;
  visible: boolean = false;
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: Event): void {
    this.drawerRef.close(e);
  }

  ngOnInit(): void {
    this.p_usuario = "Jhon Trujillo Serrano";
    this.p_number = 5;
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-home',
      },
      {
        separator: true
      },
      {
        label: 'Mi perfil',
        icon: 'pi pi-user'
      },
      {
        separator: true
      },
      {
        label: 'Configuracion',
        icon: 'pi pi-cog'
      },
      {
        separator: true
      },
      {
        label: 'Salir',
        icon: 'pi pi-sign-out'
      }
    ]
  }


}
