import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * on file drop handler
   */
  onFileDropped($event) {
    console.log('event', $event);
    window.alert(`I got ${$event.length} files.`);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    console.log('files', files);
    window.alert(`I got ${files.length} files.`);
  }
}
