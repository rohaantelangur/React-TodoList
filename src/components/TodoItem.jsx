import React from "react";

export const TodoItem = (props) => {
  const [iscomplate, setIscomplate] = React.useState(props.TodoItem.iscomplate);
  // console.log("TodoItem:", props.TodoItem);
let red ={
  color:"red"
}
let green ={
  color:"green"
}
  return (
    <div className="TodoItem" style={!iscomplate ? red : green}>
      <div>{props.TodoItem.value}</div>
      <div>
        <input type="checkbox" checked={iscomplate} onChange={(e)=>{
            setIscomplate(e.target.checked)
            }} />
      </div>
    </div>
  );
};
