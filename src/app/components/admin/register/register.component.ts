import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public adminService : AdminService) { }

  ngOnInit(): void {

    this.adminService.formModel.reset();
  }

  onSubmit() {
    this.adminService.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.adminService.formModel.reset();
          alert('New user created!');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                alert('Username is already taken');
                break;

              default:
              alert('Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
