import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginLayoutComponent } from './components/preLogin/pre-login-layout/pre-login-layout.component';
import { LoginComponent } from './components/loginComponents/login/login.component';
import { LoginLayoutComponent } from './components/loginComponents/login-layout/login-layout.component';
import { SignUpComponent } from './components/loginComponents/sign-up/sign-up.component';

// routes
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { };
