
import './App.css';
import Header from "./Mycomponets/NavBar"
import {Todos} from "./Mycomponets/Todos"
import {Footer} from "./Mycomponets/Footer"
import React, { useState } from 'react';


function App(todos) {
  const onDelete=()=>{
    console.log("i am ondelete")
    setTodos(todos.filter((e)=>{
      return e!==Todos;
    }))
  }
  const [Todos, setTodos] = useState([{
    sno:1,
    title:"Learn Dsa",
    desc:"you need to learn dsa in java its very imp"

  },
  {
    sno:2,
    title:"goto collage",
    desc:"you have to go collage to purpose you gf"

  },
  {
    sno:3,
    title:"need to learn more",
    desc:"you have to be consistant without this you cant achive your goals"

  },
]);
  return (
   <>
   <Header title="my todos list" Searchbar={false}/ >
   <Todos todos={Todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
