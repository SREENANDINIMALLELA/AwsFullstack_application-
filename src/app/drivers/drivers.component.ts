import { Component, OnInit } from '@angular/core';
import {todos} from '../todos';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import {API, graphqlOperation} from 'aws-amplify';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
todos
  constructor() {
  this.todos =  todos; //API.graphql(graphqlOperation(queries.listMyTypes));
  }

  ngOnInit() {
  }

  createItem(todo){
  //API.graphql(graphqlOperation(mutations.createTodo(todo));
  }

  deleteItem(){
  //API.graphql(graphqlOperation(mutations.deleteTodo(todo));
  }

}
