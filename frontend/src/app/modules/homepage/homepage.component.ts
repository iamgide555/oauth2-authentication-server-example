import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.isLogin()
  }

}
