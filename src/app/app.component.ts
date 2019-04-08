import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  /* Initialize a To-Do Array */
  todoArray = [];

  /* Create method to add a to-do */
  addTodo(todo) {
    this.todoArray.push(todo); /* Push added todo onto the todo "list" */
    console.log(this.todoArray);
  }
}
