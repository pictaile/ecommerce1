import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../http/person.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
   public id: number;
   public data: UserI;
   public loader = false;
   constructor(protected service: PersonService, private route: ActivatedRoute ) { }

  ngOnInit() {
	  
	  this.route.params.subscribe(params => {
       this.id = +params['id']; 
	   this.getUser();
    });
  }
  
  public getUser() {
	this.loader = true;
	this.service.getUser(this.id).subscribe(
		(res:{data: UserI}) => {
			 this.data = res.data;
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