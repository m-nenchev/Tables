import React from 'react';

export default function LabelText(props){
     return(
        <div className="form-group">
         <label htmlFor={props.name}>{props.label}</label>
         <input id={props.name}
            value={props.value}
            onChange={props.onChange}
            className='form-control'></input>
        </div>
  )
}

