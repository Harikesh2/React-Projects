

const redux = require("redux");

// Action
const ADD_TODO = "ADD TODO";
const TOGGLE_TODO = "Toggle TODO"

// Action Creation 
const addTodo = (text)=>({text, type: ADD_TODO})
const toggleTodo = (index)=>({index, type: TOGGLE_TODO})

//  InitialState

const InitialState ={
    todo:[]
}

//  Reducer
function todoReducer(state=InitialState, action ){

    switch(action.type){
        case ADD_TODO:
            return{
                ...state,
                todo:[
                    ...state.todo,
                    {
                        text: action.text,
                        completed: false
                    }
                ]

        }
        case TOGGLE_TODO:
            return{
                ...state,
                todo: state.todo.map((todo, i)=>{
                    if(i == action.index){
                        todo.completed =! todo.completed;
                    }
                    return todo;
                })
            }
            default:
                return state;

    }
}

// creating store

const store = redux.createStore(todoReducer)

// dispatch the Action
store.dispatch(addTodo("Office at 9"))
store.dispatch(addTodo("study at 10"))
store.dispatch(addTodo("Shower at 11"))
store.dispatch(toggleTodo(0))


// Read the data from the store
store.getState()
console.log(store.getState());