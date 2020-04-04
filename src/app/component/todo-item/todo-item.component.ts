import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'isComplete': this.todo.completed,
    }
  return classes;
  }

  onToggle(todo){
    console.log(todo)
    //toggle in ui
    todo.completed = !todo.completed
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(t => {
      console.log(t);
    });
  }

  onDelete(todo){
    //console.log("delete")
    this.deleteTodo.emit(todo);
  }

}
