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
     default:
       return state;
  }
}

export default createStore(todeStore);
