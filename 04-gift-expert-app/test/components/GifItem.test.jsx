import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('<GifItem /> component', () => {
  const title = 'Saitama'
  const url = 'https://www.test.com/'
  
  test('debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url}/>)
    expect(container).toMatchSnapshot()
  })

  test('should show the image with the URL and ALT indicado', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(src)
    expect(alt).toBe(title)
  })

  test('should show tht title in the component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })

})