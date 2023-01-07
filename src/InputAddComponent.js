import React from "react";
class InputAddComponent extends React.Component//1
{

render()
{
    let input=this.props.input;
    console.log("input add component rerendered")
return (
<div>
<input type="text" placeholder="enter the task" value={input} onChange={(e)=>{this.props.setInput(e.target.value)}}></input>
<button onClick={()=>{this.props.setData(input)}}>Add</button>
</div>
);
}
}
export default InputAddComponent;