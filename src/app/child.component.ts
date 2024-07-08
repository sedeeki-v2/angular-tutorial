import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
  standalone: true,
})
export class ChildComponent {
    @Output() incrementCountEvent = new EventEmitter<number>();
    @Output() addItemEvent = new EventEmitter<string>();
    
    count = 0;
    

    onClick() {
        this.count++;
        this.incrementCountEvent.emit(this.count);
    }

    addItem() { this.addItemEvent.emit('🐢'); }
}
