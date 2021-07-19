import React from "react"
import { FaTimes,FaRegCircle } from "react-icons/fa";

let Icons = ({choice})=>{
    switch(choice){
        case "cross":
            return<FaTimes id="I1" className="icon1" />;
        case "circle":
            return<FaRegCircle id="I2" className="icon2" />;
        default:
            return"";
    }
}
export default Icons