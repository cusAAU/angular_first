import {Component, OnInit} from '@angular/core';
import {OwnerService} from '../../service/owner.service';
import {Owner} from '../../dto/owner';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {

  hc:HeaderComponent = new HeaderComponent;
  private batmamman:String;
  error = false;
  errorMessage = '';
  owner: Owner;

  constructor(private ownerService: OwnerService) {
  }


  ngOnInit() {
    HeaderComponent.toOwner();
    this.hc.switchBtnTxt;
  }

  /**
   * Error flag will be deactivated, which clears the error message
   */
  vanishError() {
    this.error = false;
  }

  /**
   * Loads the owner for the specified id
   * @param id the id of the owner
   */
  private loadOwner(id: number) {
    this.ownerService.getOwnerById(id).subscribe(
      (owner: Owner) => {
        this.owner = owner;
      },
      error => {
        this.defaultServiceErrorHandling(error);
      }
    );
  }

  private defaultServiceErrorHandling(error: any) {
    console.log(error);
    this.error = true;
    if (error.status === 0) {
      // If status is 0, the backend is probably down
      this.errorMessage = 'The backend seems not to be reachable';
    } else if (error.error.message === 'No message available') {
      // If no detailed error message is provided, fall back to the simple error name
      this.errorMessage = error.error.error;
    } else {
      this.errorMessage = error.error.message;
    }
  }

}
