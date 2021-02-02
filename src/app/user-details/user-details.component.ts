import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {  FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from '../user.service';
import { User, UserType } from '../user';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id;
  userForm: FormGroup;
  user:User;
  userType = UserType;
  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { this.createForm();}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id!=='create'){
      this.userService.get(this.id).subscribe((data)=>{
        this.userForm = this.fb.group({
          username: data.username,
          phonenumber: data.phonenumber,
          email: data.email,
          usertype: data.usertype,
          address: data.address
        });       
      });
    }
   
  }
   
  createForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required ],
      phonenumber: ['', Validators.required ],
      email:['', Validators.required ],
      usertype: ['', Validators.required ],
      address: ['', Validators.required ],
    });
  }
  submit(){
    console.log(this.userForm.value);
    if(this.id!='create'){
      this.userService.update(this.id,this.userForm.value).subscribe(res => {
        console.log('User created successfully!');
        this.router.navigateByUrl('user');
   })
    }else{
      this.userService.create(this.userForm.value).subscribe(res => {
        console.log('User created successfully!');
        this.router.navigateByUrl('user');
   })
    }
    
  }
}
