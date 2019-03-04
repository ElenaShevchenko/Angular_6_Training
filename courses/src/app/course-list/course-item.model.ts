export interface CourseItem {
  id: number;
  title: string;
  creationDate: Date;
  durationInMin: number;
  description: string;
  topRated: boolean;
  author: string;
}

export interface NewCourseItem {
  title: string;
  creationDate: Date;
  durationInMin: number;
  description: string;
  author: string;
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
