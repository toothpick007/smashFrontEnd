import {Component, OnInit} from '@angular/core';
import {TokenService} from '../../Services/token.service';
import {JarvisService} from '../../Services/jarvis.service';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

    selectedFile = null;

    private userToken = this.token.get();
    public userId = null;
    public form = {
        id: null,
        uploads: null,
    };

    constructor(
        private token: TokenService,
        private jarvis: JarvisService,
        private authservice: AuthService,
        private router: Router
    ) {
    }

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
        console.log(data);
    }

    // Handle like a logout
    handleError(error) {
        this.token.remove();
        this.authservice.changeAuthStatus(false);
        this.router.navigateByUrl('/login');
    }

    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }

    onSubmit() {
        this.form.id = this.userId;
        this.form.uploads = this.selectedFile;
        console.log(this.form);
        this.jarvis.uploadUserSettings(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        console.log(data);
    }


}
