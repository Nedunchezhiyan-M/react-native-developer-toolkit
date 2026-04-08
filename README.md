# React Native Developer Toolkit

Essential React Native hooks and utilities for building better mobile apps. Zero dependencies, TypeScript-first, works on iOS and Android.

## Installation

```bash
npm install react-native-developer-toolkit
# or
yarn add react-native-developer-toolkit
```

## Hooks

### `useAppState()`

Track whether your app is in the foreground or background.

```tsx
import { useAppState } from 'react-native-developer-toolkit';

function MyComponent() {
  const appState = useAppState();

  useEffect(() => {
    if (appState === 'active') {
      refreshData();
    }
  }, [appState]);

  return <Text>App is {appState}</Text>;
}
```

**Returns:** `'active' | 'background' | 'inactive' | 'unknown'`

### `useNetworkStatus()`

Monitor network connectivity in real-time.

```tsx
import { useNetworkStatus } from 'react-native-developer-toolkit';

function MyComponent() {
  const { isConnected, type } = useNetworkStatus();

  if (!isConnected) {
    return <Text>You are offline</Text>;
  }

  return <Text>Connected via {type}</Text>;
}
```

**Returns:** `{ isConnected: boolean, type: 'wifi' | 'cellular' | 'none' | 'unknown' }`

### `useReduceMotion()`

Respect the user's accessibility preference for reduced motion.

```tsx
import { useReduceMotion } from 'react-native-developer-toolkit';

function AnimatedCard({ children }) {
  const prefersReducedMotion = useReduceMotion();

  return (
    <Animated.View
      style={{
        transform: [{ scale: prefersReducedMotion ? 1 : animatedScale }],
      }}
    >
      {children}
    </Animated.View>
  );
}
```

**Returns:** `boolean`

### `useKeyboard()`

Track keyboard visibility and height for proper layout adjustments.

```tsx
import { useKeyboard } from 'react-native-developer-toolkit';

function ChatInput() {
  const { isVisible, height } = useKeyboard();

  return (
    <View style={{ paddingBottom: isVisible ? height : 0 }}>
      <TextInput placeholder="Type a message..." />
    </View>
  );
}
```

**Returns:** `{ isVisible: boolean, height: number }`

### `usePrevious()`

Keep a reference to the previous value of a prop or state.

```tsx
import { usePrevious } from 'react-native-developer-toolkit';

function Counter({ count }) {
  const prevCount = usePrevious(count);

  return (
    <Text>
      Current: {count}, Previous: {prevCount ?? 'none'}
    </Text>
  );
}
```

**Returns:** `T | undefined`

### `useDebounce()`

Debounce a value - useful for search inputs.

```tsx
import { useDebounce } from 'react-native-developer-toolkit';

function SearchScreen() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <TextInput value={query} onChangeText={setQuery} />;
}
```

**Returns:** `T` (the debounced value)

## Utilities

### `vibrate(pattern)`

Predefined vibration patterns for common feedback scenarios.

```tsx
import { vibrate } from 'react-native-developer-toolkit';

vibrate('success');  // Short double tap
vibrate('error');    // Long buzz
vibrate('warning');  // Medium pulse
vibrate('tap');      // Single light tap
vibrate('notify');   // Notification pattern
```

### `formatBytes(bytes, decimals?)`

Human-readable file size formatting.

```tsx
import { formatBytes } from 'react-native-developer-toolkit';

formatBytes(1024);       // '1 KB'
formatBytes(1234567);    // '1.18 MB'
formatBytes(0);          // '0 Bytes'
```

### `isIphoneWithNotch()`

Detect if the device has a notch/dynamic island for safe area handling.

```tsx
import { isIphoneWithNotch } from 'react-native-developer-toolkit';

const statusBarHeight = isIphoneWithNotch() ? 44 : 20;
```

## Why this toolkit?

- **Zero dependencies** - Only uses React Native built-in APIs
- **TypeScript-first** - Full type safety out of the box
- **Lightweight** - Each hook is under 30 lines, tree-shakeable
- **Cross-platform** - Works on both iOS and Android
- **Production-ready** - Used in real apps, properly handles cleanup and edge cases

## Contributing

Contributions are welcome! Please open an issue or submit a PR.

## License

MIT
