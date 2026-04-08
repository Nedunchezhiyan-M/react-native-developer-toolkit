import {Platform, Vibration} from 'react-native';

type VibrationPattern =
  | 'success'
  | 'error'
  | 'warning'
  | 'tap'
  | 'notify';

const patterns: Record<VibrationPattern, number[]> = {
  success: [0, 40, 60, 40],
  error: [0, 80, 40, 80, 40, 80],
  warning: [0, 60, 50, 60],
  tap: [0, 30],
  notify: [0, 50, 100, 50],
};

/**
 * Trigger a predefined vibration pattern for common feedback scenarios.
 *
 * - `success` - Short double tap for successful actions
 * - `error` - Triple buzz for errors
 * - `warning` - Double pulse for warnings
 * - `tap` - Single light tap for button feedback
 * - `notify` - Notification-style pattern
 */
export function vibrate(pattern: VibrationPattern): void {
  const sequence = patterns[pattern];
  if (sequence) {
    Vibration.vibrate(
      Platform.OS === 'android' ? sequence : sequence.slice(0, 2),
    );
  }
}
