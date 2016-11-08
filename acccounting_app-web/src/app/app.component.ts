/*
 * Angular 2 decorators and services
 */
import { Component } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styles: [
    '.card-container { border-style: dotted; width: 100%; height: 100% }',
    '.grid-item {border-style: dotted;}']
})
export class AppComponent {

    ngGridOptions = {
        max_cols: 16,
        max_rows: 12,
        col_width: 50,
        row_height: 50,
        min_width: 50,
        min_height: 50,
        auto_resize: true,
    };
}

