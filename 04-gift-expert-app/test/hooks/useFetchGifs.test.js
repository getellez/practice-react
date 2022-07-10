import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('useFetchGifs Hook', () => {
  test('should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'))
    const { images, isLoading } = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  });

  test('should return images and isLoading false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )

    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()


  });

})