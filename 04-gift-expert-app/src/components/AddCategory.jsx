import { useState } from "react"

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
    <form onSubmit={onSubmit}>
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
