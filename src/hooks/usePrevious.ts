import {useEffect, useRef} from 'react';

/**
 * Returns the previous value of a variable. Useful for comparing
 * current and previous props or state values.
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
