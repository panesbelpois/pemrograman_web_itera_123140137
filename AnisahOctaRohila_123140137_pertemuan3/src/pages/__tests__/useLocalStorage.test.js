import { renderHook, act } from '@testing-library/react';
import useLocalStorage from '../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  beforeEach(() => localStorage.clear());

  test('initializes with default value', () => {
    const { result } = renderHook(() => useLocalStorage('test-key', 5));
    expect(result.current[0]).toBe(5);
  });

  test('updates localStorage when state changes', () => {
    const { result } = renderHook(() => useLocalStorage('k', 'a'));
    act(() => result.current[1]('b'));
    expect(JSON.parse(localStorage.getItem('k'))).toBe('b');
  });
});
