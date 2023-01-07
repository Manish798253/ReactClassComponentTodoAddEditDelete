import React from "react";
class Filters extends React.Component
{
    shouldComponentUpdate(newProps,nextState)
    {
        if(this.props.name==newProps.name)
        return false;
        console.log("current_props:"+this.props.name+"new props: "+newProps.name)
        return true;
    }
    render()
    {
        console.log("Filters component rerendered")
        return <button onClick={()=>{this.props.filtering(this.props.name,this.props.jsxData)}}>{this.props.name}</button>;
    }
}
export default Filters;