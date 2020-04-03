import {Component, OnInit} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
// import {platformeditorService} from '../../service/platformeditor.service';
// import {platformeditor} from '../../dto/platformeditor';

@Component({
  selector: 'app-platformeditor',
  templateUrl: '../platformeditorTemplate.component.html',
  styleUrls: ['./platformeditor.component.scss']
})
export class PlatformEditorComponent implements OnInit {

  error = false;
  errorMessage = '';
  // platformeditor: Platformeditor;

  // constructor(private platformeditorService: platformeditorService) {
  // }

  ngOnInit() {
    HeaderComponent.toEditor();
  }

  /**
   * Error flag will be deactivated, which clears the error message
   */
  vanishError() {
    this.error = false;
  }

  /**
   * Loads the platformeditor for the specified id
   * @param id the id of the platformeditor
   */
 

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
