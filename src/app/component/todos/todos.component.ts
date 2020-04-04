import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
    //this.todos = this.todoService.getTodos();
    /* this.todos = [
      {
        id: 1,
        title: 'todo1',
        completed: false
      },
      {
        id: 2,
        title: 'todo2',
        completed: true
      },
      {
        id: 3,
        title: 'todo3',
        completed: false
      }
    ] */
  }

  deleteTodo(todo:Todo){
    console.log('delete me', todo);
    //UI stuff
    this.todos = this.todos.filter(t =>
      t.id !== todo.id
    )
    //delete form server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo =>{
      //UI add
      this.todos.push(todo);
    })
  }

}
