import {useEffect, useState} from 'react';
import {Keyboard, Platform} from 'react-native';

interface KeyboardState {
  isVisible: boolean;
  height: number;
}

/**
 * Tracks keyboard visibility and height. Useful for adjusting
 * layout when the keyboard appears or disappears.
 */
export function useKeyboard(): KeyboardState {
  const [keyboard, setKeyboard] = useState<KeyboardState>({
    isVisible: false,
    height: 0,
  });

  useEffect(() => {
    const showEvent =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
    const hideEvent =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';

    const showSub = Keyboard.addListener(showEvent, e => {
      setKeyboard({isVisible: true, height: e.endCoordinates.height});
    });

    const hideSub = Keyboard.addListener(hideEvent, () => {
      setKeyboard({isVisible: false, height: 0});
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return keyboard;
}
