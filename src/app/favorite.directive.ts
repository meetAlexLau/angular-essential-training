import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[mwFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  //host binding binds the css is-favorite-hovering to the variable 'hovering'
  @HostListener('mouseenter') onMouseEnter() { //ang checks for these events
      this.hovering = true;
      //so when 'hovering' is set to true, then is-favorite-hovering is applied to the element
      //where mwFavorite is applied as a property
  }
  @HostListener('mouseleave') onMouseLeave() {
      this.hovering = false;
  }
  @Input() set mwFavorite(value) {
    this.isFavorite = value;
  }
}
