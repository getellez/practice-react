import { render } from '@testing-library/react'
import { SayHello } from '../../../src/components/SayHello/SayHello.jsx'

describe('<SayHello> component', () => {
  it('debe de hacer match con el snapshot', () => {
    const name = 'Germán'
    const expectedH1 = 'Hola, Germán!'
    const { container, getByText } = render(<SayHello name={name} />)
    const h1 = container.querySelector('h1')
    
    expect(getByText(expectedH1)).toBeTruthy()
    expect(h1.innerHTML).toBe(expectedH1)
  })
})