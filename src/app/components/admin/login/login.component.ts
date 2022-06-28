import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {

    if (localStorage.getItem('token') != null)
    this.router.navigateByUrl('adminEdit');
  }

  onSubmit(form: NgForm) {
    this.adminService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/adminEdit');
      },
      err => {
        if (err.status == 400)
          alert('Incorrect username or password.');
        else
          console.log(err);
      }
    );
  }
}
