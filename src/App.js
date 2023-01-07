import logo from './logo.svg';
import React, { forwardRef } from 'react'
import './App.css';
import InputAddComponent from './InputAddComponent';
import Filters from './Filters';
import Tasks from './Tasks';
import { nanoid } from 'nanoid'
//comp5 //outer

function FilteringOnChecked(filter,jsxData)
{
  console.log("on: "+this);
  let filteredJsxData=[];
  if(filter=="All")
   {
    filteredJsxData=jsxData;
   }
 else if(filter=="Completed")
 {
  filteredJsxData=jsxData.filter((ele)=>
  {
    if(ele.props.checked==true)
    return true;
    return false;
  })
 }
 else if(filter=="Remaining")
 {
  filteredJsxData=jsxData.filter((ele)=>
  {
    if(ele.props.checked==false)
    return true;
    return false;
  })
 }
 return filteredJsxData;
}

class App extends React.Component{
  constructor(props)
  {
    //console.log(this);
    console.log("app component started")
    super(props);
    console.log(this)
    this.data=["Code","Sleep","Repeat"];
    this.state={input:"",filter:"all"};
    this.setInput=this.setInput.bind(this);
    this.setFilter=this.setFilter.bind(this);
    this.setData=this.setData.bind(this);
    this.deleteData=this.deleteData.bind(this);
    this.setChecked=this.setChecked.bind(this);
    console.log("initial_state:"+ this.state)
    this.jsxData=this.data.map((ele)=>{
      console.log("yes")
      const newEle=<Tasks key={ele} name={ele} id={ele} checked={false} deleteData={this.deleteData}
        setChecked={this.setChecked}
      />;
      return newEle;
    })
  }
  setInput(userInput)
  {
      this.setState((state,props)=>{
        return {input:userInput};
      })
  }
  setFilter(userCustomFilter)
  {
    this.setState((state,props)=>{
      return {filter:userCustomFilter};
    })
  }
  setData(userInput)
  {
      this.data.push(userInput);
      console.log(this.data);
      this.setState({input:""});
      this.jsxData=this.data.map((ele)=>{
        console.log("yes")
        const newEle=<Tasks key={ele} name={ele} id={ele} deleteData={this.deleteData}
        checked={false}
          setChecked={this.setChecked}
        />;
        return newEle;
      })
  }
  deleteData(key)
  {
    let filteredData=[];
    let simpleData=[];
    console.log(key);
    for (const iterator of this.jsxData) {
      if(iterator["key"]!==key)
      {
        console.log(iterator);

        filteredData.push(iterator);
        simpleData.push(iterator["key"]);
      }
    }
    this.jsxData=filteredData;
    this.data=simpleData;
     this.forceUpdate();//or we could have just updated the state//this.setState({input:""});
  }
  setChecked(checked,id)
  {
    let filteredData=[];
   filteredData=this.jsxData.map((ele)=>{
if(ele["key"]==id)
{
  console.log("checked changed"+ele["key"]+"checked:"+typeof(checked)+" modified:"+!(checked))
  return (<Tasks key={ele["key"]} name={ele.props.name} id={ele.props.id} deleteData={this.deleteData}
  checked={!checked}
    setChecked={this.setChecked}/>);
}
return ele;
   });
   this.jsxData=filteredData;
   this.forceUpdate();
  }
  componentDidUpdate()
  {
    console.log("new state: "+this.state);
    console.log(this.jsxData);

  }
  render()
  {
    
    return (
      //have to call comp 1 ,comp2 ,comp3;
      <div>
      <InputAddComponent setInput={this.setInput} input={this.state.input} 
      setData={this.setData}/>
     <div><Filters name="All" filtering={FilteringOnChecked} jsxData={this.jsxData}/>
      <Filters name="Completed" filtering={FilteringOnChecked} jsxData={this.jsxData}/>
      <Filters name="Remaining" filtering={FilteringOnChecked} jsxData={this.jsxData}/></div> 
      {this.jsxData}
      </div>
     );
  }
}



export default App;
