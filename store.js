import { createStore } from 'redux';

const defaultState = {
  todos:[
    {
      tasks: 'intial parameter',
    },
  ],
};

function todeStore(state = defaultState, action){
  switch(action.type){
    case 'ADD_TODO':
     return Object.assign({},state,{
       todos: state.todos.concat([{
         tasks:action.task,
       }]),
     });
     case 'DONE_TODO':
       return Object.assign({},state,{
         todos:state.todos.filter(todo => todo !== action.todo),
       });
     default:
       return state;
  }
}

export default createStore(todeStore);
