import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory.jsx'

describe('<AddCategory /> component', () => {
  test('should change the value in the text field', () => {
    render(<AddCategory handleAddCategory={() => {}}/>)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Saitama'} })
    expect(input.value).toBe('Saitama')
  })

  test('should call handleAddCategory if the input has value', () => {
    const inputValue = 'Saitama'
    const handleAddCategoryMockFn = jest.fn()
    render(<AddCategory handleAddCategory={handleAddCategoryMockFn}/>)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.change(input, { target: { value: inputValue }})
    fireEvent.submit(form)

    expect(input.value).toBe('')
    expect(handleAddCategoryMockFn).toHaveBeenCalled()
    expect(handleAddCategoryMockFn).toHaveBeenCalledTimes(1)
    expect(handleAddCategoryMockFn).toHaveBeenCalledWith(inputValue)


    // screen.debug()
  })

  test('should not call the handleAddCategory when input value is empty', () => {
    const inputValue = ''
    const handleAddCategoryMockFn = jest.fn()
    render(<AddCategory handleAddCategory={handleAddCategoryMockFn} />)
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')
    fireEvent.change(input, { target: { value: inputValue } })
    fireEvent.submit( form )
    expect(handleAddCategoryMockFn).not.toHaveBeenCalled()
  })
})