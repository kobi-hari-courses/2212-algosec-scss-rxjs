import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme: string = 'theme1';

  changeTheme() {
    if (this.theme === 'theme1') {
      this.theme = 'theme2';
    } else {
      this.theme = 'theme1';
    }
  }
}
