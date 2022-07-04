import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export const GifGrid = ({ category, handleRemoveCategory }) => {
  
  const { images, isLoading } = useFetchGifs(category)
  
  return (
    <>
      <h3> { category } </h3> 
      {/* <small>[Eliminar]</small> */}
      <small onClick={() => handleRemoveCategory(category)}>[Eliminar]</small>
      
      {
        isLoading && (<h2>Loading...</h2>)
      }
      <div className="card-grid">
        {
          images.map(({ url, title, id }) => (
            <GifItem key={id} url={url} title={title} />
          ))
        }
      </div>
    </>
  )
}
