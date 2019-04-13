import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {JarvisService} from '../../../Services/jarvis.service';

@Component({
    selector: 'app-response-reset',
    templateUrl: './response-reset.component.html',
    styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

    public error = [];

    public form = {
        email: null,
        password: null,
        password_confirmation: null,
        resetToken: null
    };

    constructor(
        private route: ActivatedRoute,
        private jarvice: JarvisService,
        private router: Router,
    ) {
        const token = 'token';
        route.queryParams.subscribe(params => {
            console.log(params);
            this.form.resetToken = params[token];
        });
    }

    ngOnInit() {
    }

    onSubmit() {
        this.jarvice.changePassword(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

    handleResponse(data) {
        this.router.navigateByUrl('/login');
    }

    handleError(error) {

    }

}
