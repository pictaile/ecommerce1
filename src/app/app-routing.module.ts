import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './main/users/users.component';
import { PersonComponent } from './main/person/person.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'users', 
		pathMatch: 'full'
	},
	{
		path: 'users',
		component: UsersComponent
	},
	
	{
		path: 'person/:id',
		component: PersonComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
