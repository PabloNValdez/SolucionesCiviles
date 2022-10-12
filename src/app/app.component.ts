import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SolucionesCiviles';
  showHeaderAndFooter = true;

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(event => this.modifyHeaderAndFooter(event));
  }

  ngOnInit(): void {
    
  }

  modifyHeaderAndFooter(location: any) {
    // console.log(location.url); 
    if (location.url === '/maintenance') {
        this.showHeaderAndFooter = false;
    } else {
        this.showHeaderAndFooter = true;
    }
  }

}
