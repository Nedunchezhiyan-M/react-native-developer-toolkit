import {useEffect, useState} from 'react';
import {AccessibilityInfo} from 'react-native';

/**
 * Returns whether the user has enabled "Reduce Motion" in their
 * device accessibility settings. Use this to disable or simplify
 * animations for users who prefer reduced motion.
 */
export function useReduceMotion(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion);
    const subscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      setReduceMotion,
    );
    return () => subscription.remove();
  }, []);

  return reduceMotion;
}
