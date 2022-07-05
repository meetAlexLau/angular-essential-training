import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent //bootstraps AppComponent as the starting component
    /*
    main.ts runs App Module. the bootstrap property tells it to look inside AppComponent.
    Angular will search through index.html for the first tag<> that matches the selector from AppComponent
    **if we change the selector inside App Component, then we have to change it in intex.html**
    */
  ]
})
export class AppModule {}
