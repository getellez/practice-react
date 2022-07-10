const { render, screen } = require("@testing-library/react");
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('<GifGrid /> component', () => {
  const category = 'One Punch Man'
  const handleRemoveCategoryMockFn = jest.fn()

  test('should match the snapshot when initial state', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    const { container } = render(<GifGrid category={category} handleRemoveCategory={handleRemoveCategoryMockFn}/>)
    expect(container).toMatchSnapshot()
  });
  test('should show loading message and category name', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={category} handleRemoveCategory={handleRemoveCategoryMockFn} />)
    expect(screen.getByText('Loading...'))
    expect(screen.getByText(category))
  });

  test('should show items when load images from useFetchGifs ', () => {
    const gifs = [ 
      {
        id:'123',
        title: 'Saitama',
        url:'https://localhost/saitama'
      },
      {
        id:'1234',
        title: 'Saitama 2',
        url:'https://localhost/saitama-2'
      },
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category} handleRemoveCategory={handleRemoveCategoryMockFn} />)
    expect(screen.getAllByRole('img').length).toBe(2)
    expect(screen.getByText(gifs[0].title))
    expect(screen.getByText(gifs[1].title))
  });
});