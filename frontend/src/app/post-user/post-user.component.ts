import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, UserInfo, UserInfoWithPassword } from '../model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.css']
})
export class PostUserComponent implements OnInit {

  postForm: FormGroup
  userInfo: UserInfoWithPassword
  readRole: boolean
  createRole: boolean
  updateRole: boolean
  deleteRole: boolean
  roles: Role[]

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.postForm = this.formBuilder.group({
      name_field: ['', [Validators.required]],
      surname_field: ['', [Validators.required]],
      email_field: ['', [Validators.required]],
      password_field: ['', [Validators.required]]
    })
    this.userInfo = {
      id: 0,
      name: '',
      surname: '',
      email: '',
      password: '',
      roles: []
    }
    this.roles = []
    this.readRole = false
    this.createRole = false
    this.updateRole = false
    this.deleteRole = false
  }

  ngOnInit(): void {
    this.readRoles()
  }

  postUser(): void {
    if(this.readRole) this.addRole("CAN_READ_USERS")
    if(this.createRole) this.addRole("CAN_CREATE_USERS")
    if(this.updateRole) this.addRole("CAN_UPDATE_USERS")
    if(this.deleteRole) this.addRole("CAN_DELETE_USERS")
    this.userService.postUser(
      this.userInfo
    ).subscribe(result => {
      this.postForm.reset()
      this.readRole = false
      this.createRole = false
      this.updateRole = false
      this.deleteRole = false
      this.userInfo.roles = []
    }, err => {
      alert("The information you have entered is invalid.")
    })
  }

  readRoles(): void{
    this.userService.readRoles().subscribe(result => {
      this.roles = result
    })
  }

  addRole(name: string): void{
    this.roles.forEach(element => {
      if(element.name.includes(name))
        this.userInfo.roles.push(element)
    })
  }
}
