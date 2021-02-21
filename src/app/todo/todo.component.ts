import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TODOComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit(): void {
  }
  todo:any[]=[]
  task:string=''
  s:any
  addtask(event:any){
    this.task = (event.target as HTMLInputElement).value
    
  }
  add(){
    this.todo.push(this.task)
    this.s=this.todo
    console.log(this.todo)
  }
  viewtodo(){
    
  }
}
