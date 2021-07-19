import React from "react"
import "./style.css"
import Button from "./button"
import Label from "./label"

let Hello = () =>{
    return(
        <div>
              <h1 className="h1">" Hello & Welcome to ReactJS"</h1>
              <Label lbltext="Name: "/> 
              <b style={{margin:"20px"}}>PikaPRK</b>
              <br/>
              <Label lbltext="Subject: " /> 
              <b style={{margin:"20px"}}>Day 1: Assigned Task</b> 
              <br/>    
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis dicta placeat fugiat.</p>
              <br/>
              <Button btntext="B1-Button"/>
              <Button btntext="B2-Button"/>
              <Button btntext="B3-Button"/>
        </div>
    )
}
export default Hello