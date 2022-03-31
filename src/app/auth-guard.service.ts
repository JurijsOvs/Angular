import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private helper: HelperService) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.helper.token>0;
  }
}
