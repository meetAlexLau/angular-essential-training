import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser'; //browser that provides directives/pipes/etc for browser
import { AppComponent } from './app/component';
@NgModule({ //meta data
    imports : [ //bring other ang modules that this module may need
        BrowserModule //bring BrowserModule to this Module
    ], 
    declarations: [
        AppComponent //bring AppComponent as component for AppModule to use
    ], //make components/directives/pipes available that DONT come from another module 
    bootstrap: [
        AppComponent // use as root module
    ] //root module, lets ang know which is entry point of code
}) //this is not a statement(no ;), NgModule is applied to class/field/method that comes before, 
export class AppModule {}