var TodoList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
    <li>{props.todos[2]}</li>
  </ul>
);

var App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={['Learn React/Kale', 'Crush Recast.ly/Cucumbers', 'Maybe sleep/La Croix']}/> // Here we are creating an instance of the `TodoList` component
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));