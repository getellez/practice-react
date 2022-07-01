import React from 'react'

export const HelloWorld = () => {
  const newMessage = {
    author: 'German',
    date: new Date(),
    categories: [1,2,3,4,5]
  }
  const getResult = () => {
    return 2+2;
  }
  return (
    <>
      <h1>Este es mi primer componente</h1>
    </>
  )
}
