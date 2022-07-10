import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState('')
  
  const onInputChange = ({ target }) => {
    setInputValue(target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return
    handleAddCategory(inputValue.trim())
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text" 
        placeholder="Buscar GIFs"
        name="categoryInput"
        autoComplete="off"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired,
}