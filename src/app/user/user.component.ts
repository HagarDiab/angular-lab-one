import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  title = 'User';
  // @Input() username; 

  user = [];

  creationMsg = '';

  constructor() { }

  ngOnInit(): void {
    // this.username='no name';
    this.user=[
      {
        id: 1,
        name: 'no name'
      }
    ];
  }

  clearText(){
    this.user.name="";
  }

  onClick(ev){
    if(ev.target.value = '' ){
      this.creationMsg = 'Please enter a valid name .. !';
      
    }else{
      this.user.push;
      // this.username = ev.target.value;
      // this.creationMsg = `${this.username} Your name crea Successfully`;
    }
  }

}
