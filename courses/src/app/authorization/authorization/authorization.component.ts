import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';
import { AuthGuard } from '../../auth.guard';


@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})

export class AuthorizationComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService, private router: Router, private guard: AuthGuard) {
  }
  private userLogin: string;
  private userPassword: string;

  ngOnInit() {
  }

  login() {
   this.authorizationService.login(this.userLogin, this.userPassword).subscribe((res: any) => {
     const token = JSON.parse(res);
     localStorage.setItem('fakeToken', JSON.stringify(res.token));
    });
    this.router.navigate(['/courses']);
  }

}
