
import './App.css';
import React, {useState, useEffect} from 'react';
import Todo from './Todo'
import {Button, FormControl, InputLabel, Input} from '@material-ui/core'
import db from './firebase'
import firebase from 'firebase';

function App() {
  const[todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  
 // when the app loads, we need to fetch todos from db as they are added and removed
useEffect(() => {
//this code here... gets fired up when the app.js loads
db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
  setTodos(snapshot.docs.map(doc =>({id: doc.id ,todo: doc.data().todo}) ))
  // console.log(snapshot.docs.map(doc => doc.data().todo))
})
}, []);


  const addTodo = (event) => {
    // this will fireoff when we click the button
    event.preventDefault();   // this will prevent the page from refreshing becuase the submit deature in form does so automatically and we dont want that caus ethat will lead to lose info cause state is temporary in input
    // console.log("I am workingg");

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Niti's ToDo App</h1>
      <form>
       
       <FormControl>
         <InputLabel >Write Todo</InputLabel>
         <Input value={input} onChange={event => setInput(event.target.value)}></Input>
       </FormControl>
       <Button disable={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add ToDo</Button>

      </form>
     
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}
       
      </ul>
    </div>
  );
}

export default App;
