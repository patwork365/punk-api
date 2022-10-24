import React from 'react'

const Button = () => {
  return (
    <div>
        
       <button 
       onClick={this.props.handleToggleVisibility}>{this.props.visibility?"Hide details":"Show Details"}</button> Button
       
    </div>
  )
}

export default Button