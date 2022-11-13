import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  getTitle(){
    return this.headerService.headerData.title
  }

  getIcon(){
    return this.headerService.headerData.icon
  }

  getUrl(){
    return this.headerService.headerData.routeUrl
  }
}
