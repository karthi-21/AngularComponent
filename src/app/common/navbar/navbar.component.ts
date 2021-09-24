import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  host: {
    '(document:click)': 'onClick($event)',
  },
  selector: 'ng-side-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() user?: { pic?: string; name?: string };
  @Input() topMenu: Array<{ title?: string; name?: string; link?: string }> =
    [];
  @Input() bottomMenu: Array<{ title?: string; name?: string; link?: string }> =
    [];
  @Input() selectedMenuItem?: string;
  @Input() legal?: { title?: string; link?: string };
  @Input() version?: string;
  @Input() topMenuFlagText?: string;
  @Input() noDummyValues?: boolean = false;

  constructor(private _eref: ElementRef, private router: Router) {}

  ngOnInit(): void {
    if (this.noDummyValues) {
      this.setDummyValues();
    }
  }

  setDummyValues(): void {
    if (this.isNullOrUndefined(this.user)) {
      this.user = {
        pic: 'assets/img/profile-pic.jpg',
        name: 'Stylish Tamizhachi',
      };
    }
    if (this.isNullOrUndefined(this.topMenu) || this.topMenu.length === 0) {
      this.topMenu = [{ name: 'myaccount', title: 'My Account' }];
    }
    if (this.isNullOrUndefined(this.topMenuFlagText)) {
      this.topMenuFlagText = 'Do more with you account';
    }
    if (
      this.isNullOrUndefined(this.bottomMenu) ||
      this.bottomMenu.length === 0
    ) {
      this.bottomMenu = [
        { name: 'home', title: 'Home' },
        { name: 'trips', title: 'Trips' },
        { name: 'payment', title: 'Payment' },
        { name: 'manage_subscription', title: 'Manage Subscription' },
        { name: 'help', title: 'Help' },
        { name: 'discussion', title: 'Discussion' },
        { name: 'settings', title: 'Settings' },
      ];
    }
    if (this.isNullOrUndefined(this.legal)) {
      this.legal = { title: 'Legal' };
    }
    if (this.isNullOrUndefined(this.version)) {
      this.version = 'v0.1.32042';
    }
  }

  navigate(link: any, name?: any): void {
    if (!this.isNullOrUndefined(name) && name !== '') {
      this.selectedMenuItem = name;
    }
    if (!this.isNullOrUndefined(link) && link !== '') {
      this.router.navigate([link]);
    }
  }

  openNav() {
    const sideNav = document.getElementById('mySidenav');
    if (sideNav) {
      sideNav.style.width = '250px';
    }
    const main = document.getElementById('mask');
    if (main) {
      main.style.display = 'block';
    }
  }

  closeNav() {
    const sideNav = document.getElementById('mySidenav');
    if (sideNav) {
      sideNav.style.width = '0';
    }
    const main = document.getElementById('mask');
    if (main) {
      main.style.display = 'none';
    }
  }

  onClick(event: any) {
    if (event.target.id === 'mask') {
      this.closeNav();
    }
  }

  isNullOrUndefined(obj: any): boolean {
    return obj === null || obj === undefined;
  }
}
