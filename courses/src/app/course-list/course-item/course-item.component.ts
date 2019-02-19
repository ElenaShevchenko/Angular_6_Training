import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CourseItem } from '../course-item.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
  @Input() public courseItem: CourseItem;
  @Output() public onDelete = new EventEmitter<CourseItem>();

  public delete() {
    this.onDelete.emit(this.courseItem);
  }
}
