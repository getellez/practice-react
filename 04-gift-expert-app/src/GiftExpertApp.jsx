import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = (inputValue) => {
    if(categories.includes(inputValue)) return;
    setCategories(categories => [inputValue, ...categories])
  }
  
  const onDeleteCategory = (category) => {
    if (categories.includes(category)) {
      const newCategories = categories
      const pos = categories.indexOf(category)
      newCategories.splice(pos,1)
      setCategories([...newCategories])
    }
  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory handleAddCategory={onAddCategory} />

      {
        categories.map((category, index) => (<GifGrid key={category} category={category} handleRemoveCategory={onDeleteCategory}  />))
      }

    </>
  )
}
