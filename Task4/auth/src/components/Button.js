import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button type="submit" oclassName="btn btn-light btn-lg">{props.value}</button>
    </div>
  )
}

export default Button
