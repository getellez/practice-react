import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
import PropTypes from 'prop-types'

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
  handleRemoveCategory: PropTypes.func.isRequired
}