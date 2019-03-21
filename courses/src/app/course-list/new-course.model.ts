import { Author } from './course-item.model';

export interface NewCourseModel {
  title: string;
  creationDate: Date;
  durationInMin: number;
  description: string;
  authors: Author[];
}
