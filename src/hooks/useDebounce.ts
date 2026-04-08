import {useEffect, useState} from 'react';

/**
 * Debounces a value by the specified delay in milliseconds.
 * The returned value only updates after the input stops
 * changing for the given duration.
 *
 * Great for search inputs to avoid firing API calls on every keystroke.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}
