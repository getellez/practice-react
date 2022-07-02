import { render } from '@testing-library/react'
import { SayHello } from '../../../src/components/SayHello/SayHello.jsx'

describe('<SayHello> component', () => {
  
  it('should show the name in a H1', () => {
    const expectedTitle = 'Hola, Germán!';
    const name = 'Germán';
    const { container, getByTestId } = render(<SayHello name={name} />)
    expect(getByTestId('mytestid').innerHTML).toContain(expectedTitle)
  });
  it('should show the title in a H2', () => {
    const title = 'Learning React';
    const { container } = render(<SayHello title={title}/>)
    const h2 = container.querySelector('h2')
    expect(h2.innerHTML).toContain(title)
  });

  it('debe de hacer match con el snapshot', () => {
    const name = 'Germán'
    const { container } = render(<SayHello name={name} />)
    expect(container).toMatchSnapshot()
  })

  it('should have only 1 name', () => {
    const name = 'Germán'
    const expectedTitle = 'Hola, Germán!'
    const { container, getAllByText } = render(<SayHello name={name} />)
    expect(getAllByText(expectedTitle).length).toBe(1)
  });

})