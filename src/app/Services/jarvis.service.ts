import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class JarvisService {

    public baseUrl = 'http://smash-laravel.test/api';

    constructor(private http: HttpClient) {
    }

    signup(data) {
        return this.http.post(`${this.baseUrl}/signup`, data);
    }

    login(data) {
        return this.http.post(`${this.baseUrl}/login`, data);
    }

    getBasicLoggedInUserData(token) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token,
            'Accept': 'application/json'
        });
        return this.http.get(`${this.baseUrl}/currentUser`, {headers: headers});
    }

    sendPasswordResetLink(data) {
        return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data);
    }

    changePassword(data) {
        return this.http.post(`${this.baseUrl}/resetPassword`, data);
    }

    uploadUserSettings(data) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            // 'Authorization': 'Bearer ' + token,
            // 'Accept': 'application/json'
        });
        return this.http.post(`${this.baseUrl}/uploadUserImages`, data, {headers: headers});
    }
}
