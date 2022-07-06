import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  // styles: [`
  //   h1 { color: #ffffff; }
  //   .description {
  //     font-style: italic;
  //     color: green
  //   }
  // `] //inline css, uses styles:
  styleUrls: ['./app.component.css']
  /*
  using url file, uses styleUrls:
  styleUrls takes in an array, so multiple css files can be used
  */
})
export class AppComponent {}
