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

  deleteTodo(todo) {
    for (let i = 0; i < this.todoArray.length; i++) { /* Loop through the todoArray O(n) and if the id's match up, delete it */
      if (todo === this.todoArray[i]) { /* Identify if the todo is the one I want to delete */
        this.todoArray.splice(i, 1);
      }      
    }

  }
}
