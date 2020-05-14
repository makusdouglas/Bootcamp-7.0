import React from 'react'
import PropTypes from 'prop-types'
function TechItem({tech, onDeleteFunction}){
  return(
    <li key={tech}>
          {`${tech} : `}
          <button type="button" onClick={onDeleteFunction} >Remover</button>
        </li>
  )
}

TechItem.defaultProps ={
  tech: 'Oculto'
}

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDeleteFunction: PropTypes.func.isRequired,
}
export default TechItem;