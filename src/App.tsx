import React from 'react';
import './App.css';
import TodoList, { ITodo } from './components/TodoList';
import NewTodo from './components/NewTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)


interface IAppState {
  todoList: ITodo[]
  time: string
}

class App extends React.Component<{}, IAppState> {
  private todoList: ITodo[] = [{ todo:'Programmera', isDone:false}, { todo:'Gymmet', isDone:true}]

  constructor(props: any) {
    super(props)

    this.state = {
      todoList: [{ todo:'Programmera', isDone:false}, { todo:'Gymmet', isDone:true}],
      time: ''
    }
  }

  updateTodoList( todo:string, isDone:boolean): void{

    console.log('Lägg till ' + todo)

    this.setState({
      todoList: [...this.state.todoList, {todo, isDone}]
    })
  }


  changeTodoState(todoList: ITodo[] ){
    console.log(todoList)

    this.setState({
      todoList: [...todoList]
    })
    // this.forceUpdate()
  }

  deleteItem(todo: string) {
    const filteredItems = this.state.todoList.filter(item => item.todo!==todo);
    this.setState({
      todoList: filteredItems
    })
  }

  componentDidMount() {
      setInterval(() => {
        this.setState({
          time: new Date().toLocaleString()
      }) 
    }, 1000);
  }

  render() {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Måndag";
    weekday[1] = "Tisdag";
    weekday[2] = "Onsdag";
    weekday[3] = "Torsdag";
    weekday[4] = "Fredag";
    weekday[5] = "Lördag";
    weekday[6] = "Söndag";

    const n = weekday[d.getDay()];

    return(
      <div className="App">
        <h4> Att göra idag {n + ' ' + this.state.time} </h4>
        <TodoList todos={this.state.todoList} addChangeTodo={this.changeTodoState.bind(this)} deleteItem={this.deleteItem.bind(this)}></TodoList>
        <NewTodo addTodo={this.updateTodoList.bind(this)}></NewTodo>
      </div>
    )
  }
  
}
export default App


