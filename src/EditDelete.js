import React from "react";
class EditDelete extends React.Component
{
    render()
    {
        return (
        <button onClick={()=>{this.props.deleteData(this.props.taskId)}}>{this.props.name}</button>);
    }
}
export default EditDelete;
