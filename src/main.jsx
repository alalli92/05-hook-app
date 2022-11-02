import React from 'react'
import ReactDOM from 'react-dom/client'
import { CallbackHook } from './06-memos/CallbackHook'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { FormWithCustomHook } from './02-useEffect/FormWIthCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { MultipleCustomHooks } from './03-examples'
//import { FocusScreen } from './04-useRef/FocusScreen'
// import { MemoHook } from './06-memos/memoHook'
// import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
// import { HooksApp } from './HooksApp'
import './index.css'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
   // <React.StrictMode>
   <MainApp />
   // </React.StrictMode>
)
