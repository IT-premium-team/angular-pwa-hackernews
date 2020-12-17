import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-common-template',
  templateUrl: 'common-template.component.html',
  styleUrls: ['./common-template.component.less']
})
export class CommonTemplateComponent {
  @Input('stories') stories$: Observable<any>;
  @Input() paginatorConfig: any;

  @Output() pageChange = new EventEmitter<any>();

  constructor() {}

  public triggerPageChanges(pageObj: any): void {
    this.pageChange.emit(pageObj);
  }
}