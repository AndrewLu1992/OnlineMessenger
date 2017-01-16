import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";

const APP_ROUTES: Routes = [
    {path: 'messages', component: MessagesComponent},
    {path: 'auth', component: AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' },
    {path: '', redirectTo: '/messages', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);