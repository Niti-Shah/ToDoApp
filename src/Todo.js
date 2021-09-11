import React, {useState} from 'react'
import './Todo.css'
import db from './firebase'
import {Button, Modal, Avatar, ListItemAvatar, ImageIcon, List, ListItem, ListItemText} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      backgroundColor: theme.palette.background.paper ,
      position: 'absolute',
      width: 400,
      border: '2px solid black',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props){ 
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    const updateTodo = () => {
        //update todo with new input text

        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true})
        setOpen(false);
    }

    return (
        <>
        <Modal 
        open = {open}
        onClose={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h1>Update ToDo below</h1>
                <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
                <Button onClick={updateTodo}>Update ToDo</Button>
            </div>
        </Modal>

        <List>
            <ListItem className='todo_list'>
                <ListItemAvatar>
                    {/* <Avatar>
                        <imageIcon />
                    </Avatar> */}
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
            </ListItem>
            <button onClick ={e => setOpen(true)}>Edit</button>
            <DeleteIcon onClick={event => {
                 db.collection('todos').doc(props.todo.id).delete()
            }}>DELETE ME</DeleteIcon>
       
        </List>

        </>

    )
        }

export default Todo
