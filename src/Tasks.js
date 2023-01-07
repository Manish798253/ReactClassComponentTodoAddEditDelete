import React from "react";
import EditDelete from "./EditDelete";
class Tasks extends React.Component
{
    //every task's rerendering has to be stopped on adding of a single task;
    //to be done in future
shouldComponentUpdate(nextProps,nextState)
{
    if(nextProps.checked==this.props.checked)
    {
        return false;
    }
    return true;
}

render()
{
    console.log("Tasks component rerendered");
    return (
<div>
 <div>
 <input type="checkbox" value={this.props.checked} onChange={()=>{this.props.setChecked(this.props.checked,this.props.id)}}/> 
 {this.props.name}<br/></div>
 <div>
 <EditDelete name="Edit"/>
<EditDelete name="Delete" deleteData={this.props.deleteData} taskId={this.props.id}/>
</div>
</div>);
}

}
export default Tasks