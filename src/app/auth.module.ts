import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SharedModule } from './shared.module';

@NgModule({
    declarations: [AuthComponent],
    imports: [SharedModule, RouterModule.forChild([{ path: 'auth', component: AuthComponent }])]
})



export class AuthModule {

}