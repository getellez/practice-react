export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VIfOYcnjA4I0i2aC8Uw2j3j3WsvM7pE3&limit=5&q=${category}`
  const resp = await fetch(url)
  const { data } = await resp.json()
  const gifs = data.map( gif => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))
  return gifs
}