import { Component } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent {
  onDelete() { //function for deleting 
    console.log("delete clicked")
  }

  
}
