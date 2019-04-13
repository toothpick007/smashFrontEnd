import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../Services/token.service';
import {JarvisService} from '../../Services/jarvis.service';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  private userToken = this.token.get();

    public userId = null;
    public userName = null;

  constructor(
      private token: TokenService,
      private jarvis: JarvisService,
      private authservice: AuthService,
      private router: Router
  ) { }

  ngOnInit() {
      this.getUserData(this.userToken);
  }

    getUserData(token) {
        this.jarvis.getBasicLoggedInUserData(token).subscribe(
            data => this.handleData(data),
            error => this.handleError(error)
        );
    }

    handleData(data) {
        this.userId = data.id;
        this.userName = data.name;
        console.log(data);
    }

    // Handle like a logout
    handleError(error) {
        this.token.remove();
        this.authservice.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    }

}
