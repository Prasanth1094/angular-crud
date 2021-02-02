import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList=[];
  constructor(private userService:UserService) { }  
  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.userService.listUsers()
      .subscribe(
        users => {
          this.userList = users;
          console.log(users);
        },
        error => {
          console.log(error);
        });
  }
  deleteUser(id){
    this.userService.delete(id).subscribe(res => {
         this.userList = this.userList.filter(item =>item._id !== id);
         console.log('User deleted successfully!');
    },
    error => {
      console.log(error);
    })
  }

}
