import {Dimensions, Platform} from 'react-native';

const NOTCH_HEIGHTS = [780, 812, 844, 852, 874, 896, 926, 932, 956];

/**
 * Detect if the current device is an iPhone with a notch or Dynamic Island.
 * Useful for determining safe area insets without a library.
 */
export function isIphoneWithNotch(): boolean {
  if (Platform.OS !== 'ios') return false;

  const {height, width} = Dimensions.get('window');
  const screenHeight = Math.max(height, width);

  return NOTCH_HEIGHTS.includes(screenHeight);
}
