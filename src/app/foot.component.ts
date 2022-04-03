import { Component, Input } from '@angular/core';

@Component({
  selector: 'foot',
  template: `<p><strong>{{content}}!</strong></p>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class FootComponent {
  @Input() content: string;
}
