import React from 'react'

const Input = (props) => {
  return (
    <div className="input-group mb-3">
              <span className="input-group-text">{ props.name } </span>
              <input type={props.type}  className="form-control " name={props.name} placeholder="Enter your name" />
    </div>
  )
}

export default Input
