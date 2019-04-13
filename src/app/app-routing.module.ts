import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ProfileComponent} from './components/profile/profile.component';
import {RequestResetComponent} from './components/password/request-reset/request-reset.component';
import {ResponseResetComponent} from './components/password/response-reset/response-reset.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {UserSettingsComponent} from './components/user-settings/user-settings.component';
import {BrowseComponent} from './components/browse/browse.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'request-password-reset',
        component: RequestResetComponent
    },
    {
        path: 'response-password-reset',
        component: ResponseResetComponent
    },
    {
        path: 'user-settings',
        component: UserSettingsComponent
    },
    {
        path: 'browse',
        component: BrowseComponent
    },
    ];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
