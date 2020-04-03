import {Injectable} from '@angular/core';
import {HeaderComponent} from '../component/header/header.component';



@Injectable({
  providedIn: 'root'
})
export class Globals {
  readonly backendUri: string = 'http://localhost:8080/';
}
