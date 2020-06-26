import React, { ChangeEvent } from 'react'

interface INewTodoProps {
    addTodo( todo:string, isDone:boolean): void
}

interface INewTodoState {
    
    todo:string
    isDone:boolean
}

class NewTodo extends React.Component<INewTodoProps, INewTodoState> {
    constructor(props: INewTodoProps) {
        super(props)

        this.state = {
            
            todo: '',
            isDone: false

        }
    }

    updateTodo(e: ChangeEvent<HTMLInputElement>){
        this.setState({todo: e.target.value})
    }

    sendToParent(){
        this.props.addTodo( this.state.todo, this.state.isDone)

        console.log('Skicka ' + this.state.todo + ' till Parent')
    }

    render(){
        console.log(this.state.todo)

        return(
            <React.Fragment>
                <input type="text" value={this.state.todo} onChange={this.updateTodo.bind(this)} placeholder='Lägg till nytt uppdrag' id="to-do-form"/>
                <button type="button" onClick={this.sendToParent.bind(this)} id='to-do-button'>Spara</button>
            </React.Fragment>
        )
    }
}
export default NewTodo