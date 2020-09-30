import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';
import { SessionStorageService } from 'src/app/services/session/session-storage.service';
@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  showError = false;
  spinner = false;

  constructor(private fb: FormBuilder,
    private httpSv: HttpService,
    private sessionStorage: SessionStorageService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.showError = false;
      this.spinner = true;
      this.httpSv.validateLogin(this.loginForm.getRawValue()).subscribe(response => {
        this.spinner = false;
        if (response.value == 'true') {
          this.sessionStorage.userName = this.loginForm.get('username').value;
          this.router.navigate(['/vertical/default-dashboard']);
        } else {
          this.showError = true;
        }
      },
        (error: ErrorEvent) => {
          this.spinner = false;
        });
    }
  }
}
