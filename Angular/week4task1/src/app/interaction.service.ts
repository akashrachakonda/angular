import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  constructor() { }
private _addUser=new Subject<string>();
addedUser$=this._addUser.asObservable();

sendUserDetails(username:string)
{
  this._addUser.next(username);
}

}
