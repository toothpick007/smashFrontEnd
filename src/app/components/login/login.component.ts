import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JarvisService} from '../../Services/jarvis.service';
import {TokenService} from '../../Services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public form = {
        email: null,
        password: null
    };

    public error = null;

    constructor(
        private jarvis: JarvisService,
        private token: TokenService,
        private router: Router,
        private authservice: AuthService
    ) {
    }

    onSubmit() {
        this.jarvis.login(this.form).subscribe(
            data => this.handleData(data),
            error => this.handleError(error)
        );
    }

    handleData(data) {
        this.token.handle(data.access_token);
        this.authservice.changeAuthStatus(true);
        this.router.navigateByUrl('/profile');
    }

    handleError(error) {
        this.error = error.error.error;

    }

    ngOnInit() {
    }

}
