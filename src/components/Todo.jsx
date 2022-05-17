import React from "react";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";

export const Todo = () => {
  let [value, setValue] = React.useState("");
  const [Todos, setTodos] = React.useState([]);

  
  return (
    <div className="App">
      <h1>Todo's List</h1>
      

      
      {
          Todos.map((Element)=>{
              return(
                <>
                  <TodoItem TodoItem={Element} key={Element.id}/>
                  <TodoList TodoItem={Element} />
                </>
              ) 
          })
      }

<input className="inputtodos"
        type="text"
        value={value}
        placeholder="White Something"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="addbtn"
        onClick={() => {
          //   console.log(value);
          setTodos([...Todos, { id: Date.now(), iscomplate: false, value: value }]);
          console.log(Todos);
            setValue("")
        }}
      >
        +
      </button>
    </div>
  );
};
