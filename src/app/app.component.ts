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
  addTodo(todo: any) {
    todo !== "" ? this.todoArray.push(todo) : alert("Please fill in the to-do field");     
    console.log("todo: " + todo);
    console.log(this.todoArray);
  }

  deleteTodo(todo: any) {
    for (let i = 0; i < this.todoArray.length; i++) { /* Loop through the todoArray O(n) and if the id's match up, delete it */
      if (todo === this.todoArray[i]) { /* Identify if the todo is the one I want to delete */
        this.todoArray.splice(i, 1);
      }      
    }
  }

  // todoSubmit(value: any) {
  //   value !== "" ? this.todoArray.push(value.todo) : alert("Please fill in the To-do field");
  // }
}
