import {Component, OnInit} from '@angular/core';
import {JarvisService} from '../../Services/jarvis.service';
import {TokenService} from '../../Services/token.service';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    public form = {
        email: null,
        name: null,
        password: null,
        password_confirmation: null
    };

    public error = [];

    constructor(
        private jarvis: JarvisService,
        private token: TokenService,
        private router: Router,
        private authservice: AuthService
    ) {
    }

    onSubmit() {
        this.jarvis.signup(this.form).subscribe(
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
        this.error = error.error.errors;
        console.log(error);
    }

    ngOnInit() {
    }

}
