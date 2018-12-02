import { Component, OnInit } from '@angular/core';
import { User} from '../user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userList: User[] = [
    {
      id: 101,
      firstName: 'John',
      lastName: 'Snow'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
