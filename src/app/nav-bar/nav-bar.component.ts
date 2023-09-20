import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navOpen=false;

  constructor(public authService:AuthServiceService, private router: Router) { 
  }

  ngOnInit(): void {
  }
  navbar(){
    this.navOpen=!this.navOpen;
  }
}
