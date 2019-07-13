import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from './login/login.component';

export const layout: any[] = [
    HeaderComponent,
    LoginComponent
];

export * from './header/header.component';
export * from './login/login.component';