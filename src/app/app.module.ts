import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { isNgTemplate } from '@angular/compiler';
import { MediaItemComponent } from './media-item.component';
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent //adding MediaItemComponent to the module to render
                       //but we have to add the selector for it inside app.component.html, <mw-media-item>
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
