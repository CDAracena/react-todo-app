import React from 'react';
import Header from './Header';
import Body from './Body';
import './body.css'

class App extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    todos: [],
    count: 0,
    text: '',
  }
this.handleTextChange = this.handleTextChange.bind(this)
this.handleAddTodo = this.handleAddTodo.bind(this)
this.removeTodo = this.removeTodo.bind(this)
this.handleTodoCheckBox = this.handleTodoCheckBox.bind(this)
this.handleToggle = this.handleToggle.bind(this)
}
handleTextChange(event){
  this.setState({text: event.target.value}, function(){
  })

}

handleAddTodo(e){
  let todoId = new Date();
  let todo = {
    id: todoId.getTime(),
    text: this.state.text,
    completed: false,
  }
  this.setState({todos:[...this.state.todos, todo], count: this.state.count + 1},function(){
  })
  e.preventDefault();
}

handleTodoCheckBox(todo){
    todo.completed = !todo.completed

    this.handleToggle(todo.completed)
}


handleToggle(completed){

if (completed === true){
  return "todo-strike"
} else {
  return "no-strike"
}

}


removeTodo(todo){
let todos = this.state.todos.filter(function(item){
  return item !== todo
})
  this.setState({todos: todos, count: this.state.count - 1}, function(){

  })
  console.log(this.state.todos)
}
  render() {
    return (
      <div className="main-container">
      <Header/>
      {this.state.count}
    <Body inputText={this.handleTextChange} value={this.state.text} addTodo={this.handleAddTodo} todos={this.state.todos} removeTodo={this.removeTodo} todoStatus={this.handleTodoCheckBox} toggleClass={this.handleToggle}/>

    </div>)
  }
}
export default App;
