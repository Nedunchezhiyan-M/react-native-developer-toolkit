import {useEffect, useState} from 'react';
import {AppState, type AppStateStatus} from 'react-native';

/**
 * Returns the current app state and re-renders when it changes.
 *
 * - `active` - App is in the foreground
 * - `background` - App is in the background
 * - `inactive` - (iOS) Transitioning between states
 * - `unknown` - Initial state before determined
 */
export function useAppState(): AppStateStatus {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState ?? 'unknown',
  );

  useEffect(() => {
    const subscription = AppState.addEventListener('change', setAppState);
    return () => subscription.remove();
  }, []);

  return appState;
}
