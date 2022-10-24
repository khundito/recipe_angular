export class UserService{


users = [
  {name: 'Breakfast', status:'Available'},
  {name: 'Lunch',status: 'Available'},
  {name: 'Dinner',status: 'Available'}

  ]
AddNewUser(name: string, status: string){
this.users.push({name: name, status: status});
}

}
export class BreakfastService{
OnBreakfastClicked(title: string){
  alert('Add Recipe to '+title+'  breakfast');
    }

}
