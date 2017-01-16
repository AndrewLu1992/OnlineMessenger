import { Component, OnInit } from "@angular/core";
import { FormGroup , FormControl, Validators } from "@angular/forms";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent{
    myForm: FormGroup;
    
    constructor(private authService: AuthService, private router: Router) {}
    
    onSubmit() {
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
        );
        this.authService.signin(user).subscribe(
            data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('userId', data.userId);
                this.router.navigateByUrl('/');
            },
            err => console.log(err)
        );
        this.myForm.reset();
    }
    
    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required, Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}