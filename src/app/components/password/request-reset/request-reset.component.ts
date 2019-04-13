import {Component, OnInit} from '@angular/core';
import {JarvisService} from '../../../Services/jarvis.service';
import {SnotifyModule, SnotifyService} from 'ng-snotify';

@Component({
    selector: 'app-request-reset',
    templateUrl: './request-reset.component.html',
    styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

    public form = {
        email: null
    };

    public error = [];

    constructor(
        private jarvis: JarvisService,
        private notify: SnotifyService,
        ) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.jarvis.sendPasswordResetLink(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.notify.error(error.error.error)
        );
    }

    handleResponse(res) {
        console.log(res);
        this.form.email = null;
    }
}
