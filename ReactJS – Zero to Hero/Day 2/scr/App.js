import React,{useState} from "react"
import "./style.css"

let App = ()=>{
    let[score,setScore] = useState(0) 
    return(
        <div>
            <h1>PikaPRK</h1>
            <h2>Score: {score}</h2>
            <button className="button" onClick={()=>(score<25)?setScore(score+1) : ""}>Increment</button>
            <button className="button" onClick={()=>(score>0)?setScore(score-1) : ""}>Decrement</button>
            <button className="button" onClick={()=>{setScore(0)}}>Reset</button>
        </div>
    ) 
}
export default App