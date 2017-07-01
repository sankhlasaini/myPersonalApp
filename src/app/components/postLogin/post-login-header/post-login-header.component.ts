import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-post-login-header',
  templateUrl: './post-login-header.component.html',
  styleUrls: ['./post-login-header.component.css']
})
export class PostLoginHeaderComponent implements OnInit {

  navList = [
    { name: 'Dashboard', link: '/dashboard', path: '../../assets/images/menu1.png' },
    { name: 'Order', link: '/order', path: '../../assets/images/menu2.png' },
    { name: 'Delivery', link: '/delivery', path: '../../assets/images/menu3.png' },
    { name: 'Promotions', link: '/promotion', path: '../../assets/images/menu4.png' },
    { name: 'Region', link: '/region', path: '../../assets/images/menu5.png' },
    { name: 'Products', link: '/products', path: '../../assets/images/menu6.png' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
