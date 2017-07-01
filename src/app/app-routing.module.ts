import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreLoginLayoutComponent } from './components/preLogin/pre-login-layout/pre-login-layout.component';
import { LoginComponent } from './components/loginComponents/login/login.component';

// routes
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { };
