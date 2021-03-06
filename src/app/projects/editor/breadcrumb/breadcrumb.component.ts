import {Component, Input, OnInit } from '@angular/core';
import {View} from '../../../shared/view.model';
import {NodeUtility} from '../../../shared/node-utility.model';

@Component({
  selector   : 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls  : ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input()
  views: Array<View>;

  constructor() {
  }

  ngOnInit() {
  }

  /** Return the parentNode title. If the parentNode is null then
   * it is a root view, return "root view" instead. */
  getViewTitle(view: View): string {
    return view.parentNode ? NodeUtility.title(view.parentNode) : 'root-view';
  }
}
