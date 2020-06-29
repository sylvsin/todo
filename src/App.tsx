import React from 'react';
import './App.css';
import TodoList, { ITodo } from './components/TodoList';
import NewTodo from './components/NewTodo';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DayTime from './components/DayTime';
library.add(faTrash)


interface IAppState {
  todoList: ITodo[]
}


class App extends React.Component<{}, IAppState> {
  private todoList: ITodo[] = [{ todo:'Programmera', isDone:false}, { todo:'Gymmet', isDone:true}]

  constructor(props: any) {
    super(props)

    this.state = {
      todoList: [{ todo:'Programmera', isDone:false}, { todo:'Gymmet', isDone:true}],
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

    this.setState({todoList: [...todoList]})
  }

  deleteItem(todo: string) {
    const filteredItems = this.state.todoList.filter(item => item.todo!==todo);
    this.setState({todoList: filteredItems})
  }

  render() {
    return(
      <div className="App">
        <DayTime></DayTime>
        <TodoList todos={this.state.todoList} addChangeTodo={this.changeTodoState.bind(this)} deleteItem={this.deleteItem.bind(this)}></TodoList>
        <NewTodo addTodo={this.updateTodoList.bind(this)}></NewTodo>
      </div>
    )
  }
  
}
export default App


