export interface CourseItem {
  id: number;
  title: string;
  creationDate: Date;
  durationInMin: number;
  description: string;
  topRated: boolean;
  authors: Author[];
}

export interface NewCourseItem {
  title: string;
  creationDate: Date;
  durationInMin: number;
  description: string;
  authors: Author[];
}

export interface CourseDb {
  id: number;
  name: string;
  description: string;
  isTopRated: boolean;
  date: Date;
  authors: AuthorDb[];
  length: number;
}

export interface AuthorDb {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Author {
  id: string;
  name: string;
}


