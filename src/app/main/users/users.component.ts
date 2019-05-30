import { Component, OnInit } from '@angular/core';
import { UserService } from '../../http/user.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public data: UserI[];
  public loader = false;
  public pageIndex = 0;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  
  constructor(protected userService: UserService) { }

  ngOnInit() {
	  this.getUsers();
  }

  public getUsers(page?: any) {
	  this.loader = true;
	this.userService.getList(this.pageIndex + 1).subscribe(
		(res:any) => {
			this.data = res.data;
			if(page) {
				this.length = page.length;
            this.pageSize = page.pageSize;
            this.pageIndex = page.pageIndex;
			}
			
			this.loader = false;
			
		},
		
		(err: any) => {
			this.loader = false;
			alert('some error')
		}
	);
  }
}

interface UserI {
	id: number;
  email: string;
  first_name: string;   
  last_name: string;   
  avatar: string;   
}