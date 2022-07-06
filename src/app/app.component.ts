import { Component } from '@angular/core';

@Component({
  selector: 'mw-app', //angular finds <mw-app> 
  templateUrl: './app.template.html'
    //angular inserts template where <mw-app> is, use template:
    //you can also use refer template as a different file that contains .html text, use templateUrl:
})
export class AppComponent {}
