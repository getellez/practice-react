import { fireEvent, getByText, render, screen } from "@testing-library/react";
import { CounterApp } from "../../../src/components/CounterApp/CounterApp";

describe('<CounterApp> component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<CounterApp value={100} />)
    expect(container).toMatchSnapshot()
  })
  it('should show 100 as an initial value', () => {
    render(<CounterApp value={100} />)
    expect(screen.queryByTestId('counter-value').innerHTML).toContain("100")
  });
  
  it('should add +1 ', () => {
    render(<CounterApp value={100} />)
    fireEvent.click(screen.getByText('+ 1'))
    expect(screen.getByText('101')).toBeTruthy()
  });

  it('should substract 1 ', () => {
    render(<CounterApp value={100} />)
    fireEvent.click(screen.getByText('- 1'))
    expect(screen.getByText(99)).toBeTruthy()
  });

  it('should reset the value', () => {
    render(<CounterApp value={100} />)
    fireEvent.click(screen.getByText('+ 1'))
    fireEvent.click(screen.getByText('+ 1'))
    fireEvent.click(screen.getByText('+ 1'))
    fireEvent.click(screen.getByText('Reset'))
    expect(screen.getByText(100)).toBeTruthy()
  });

})