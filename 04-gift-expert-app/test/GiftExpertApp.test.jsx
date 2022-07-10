import { fireEvent, render, screen } from "@testing-library/react";
import { GiftExpertApp } from "../src/GiftExpertApp";

jest.mock('../src/GiftExpertApp')

describe('<GiftExpertApp> Component', () => {
  test('should match th∫e snapshot', () => {
    const { container } = render(<GiftExpertApp />)
    expect(container).toMatchSnapshot()
  });
  test('should have the correct title', () => {
    const title = 'GiftExpertApp'
    render(<GiftExpertApp />)

    expect(screen.getByText(title)).toBeTruthy()
  });
  test('should do something', () => {
    const category = 'One Punch Man'
    render(<GiftExpertApp />)
    const form = screen.getByRole('form')
    fireEvent.submit(form)
    const spy = jest.spyOn(GiftExpertApp, 'onAddCategory')
    expect(spy).toHaveBeenCalled()
  });
})