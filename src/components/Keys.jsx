import React, { useState } from "react";
import Display from "./Display";



const Keys = () => {
    
    const[expression,setExpression]=useState("");

    const handleClick=(e)=>{
        setExpression(expression+e);
    }

    const clear=()=>{
        setExpression("");
    }

    const handleDEL=()=>{
        if (typeof expression != "string"){
            let ex1 = expression.toString()
            ex1 = ex1.substring(0,ex1.length-1)
            setExpression(ex1)
        }else{
            setExpression(expression.substring(0,expression.length-1))
        }
    }

    const calculate=()=>{
        setExpression(eval(expression));
    }



  return (
    <>
        <div>
            <Display expression = {expression} />
        </div>

      <div className="keys">
        <div>
          <button className="btn extra" style={{width:"10rem",height:"5rem"}} onClick={clear}>AC</button>
          <button className="btn extra" style={{width:"5rem",height:"5rem"}} onClick={handleDEL}>DEL</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('+')}>+</button>
        </div>
        <div>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('1')}>1</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('2')}>2</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('3')}>3</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('-')}>-</button>
        </div>
        <div>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('4')}>4</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('5')}>5</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('6')}>6</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('*')}>*</button>
        </div>
        <div>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('7')}>7</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('8')}>8</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('9')}>9</button>
          <button className="btn" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('/')}>/</button>
        </div>
        <div>
            <button className="btn extra ef" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('.')}>.</button>
            <button className="btn extra" style={{width:"5rem",height:"5rem"}} onClick={()=>handleClick('0')}>0</button>
            <button className="btn ed " style={{width:"10rem",height:"5rem"}} onClick={calculate}>=</button>
        </div>

        
      </div>
    </>
  );
};

export default Keys;
