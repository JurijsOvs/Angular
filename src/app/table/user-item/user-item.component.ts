import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'pro-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      this.forbiddenName.bind(this),
    ]),
    username: new FormControl(null, [], this.forbiddenUserName.bind(this)),
    email: new FormControl(null, [Validators.email]),
    address: new FormControl(),
    phone: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    website: new FormControl(),
    company: new FormControl(),
  });

  user: any;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params);
      if (params.id) {
        this.id = params.id;
        this.httpService.getUser(params.id).subscribe((response) => {
          if (response) {
            this.fillInForm(response);
          }
        });
      }
    });
  }

  fillInForm(user: any): void {
    this.userForm.patchValue({
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      street: user.address.street,
      city: user.address.city,
      website: user.website,
      company: user.company.name,
    });
  }

  onSubmit(): void {
    console.log(this.userForm);
    if (this.userForm.valid) {
      if (this.id) {
        this.httpService
          .editUser(this.userForm.value, this.id)
          .subscribe((response) => {
            console.log(response);
          });
      } else {
        this.httpService.saveUser(this.userForm.value).subscribe((response) => {
          console.log(response);
        });
      }
    } else {
      alert('Form is not valid');
    }
  }

  forbiddenName(control: FormControl): { [key: string]: boolean } | null {
    if (control?.value?.toLowerCase() === 'admin') {
      return { forbiddenName: true };
    } else {
      return null;
    }
  }

  forbiddenUserName(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const promise = new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value?.toLowerCase() === 'superuser') {
          resolve({ forbiddenUserName: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
