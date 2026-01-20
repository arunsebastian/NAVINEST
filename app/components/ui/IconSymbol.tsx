// Fallback for using MaterialIcons on Android and web.

import { useThemeColor } from '@/hooks/useThemeColor';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';

type IconMapping = Record<
    SymbolViewProps['name'] | string,
    ComponentProps<typeof MaterialIcons>['name']
>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
    'default': 'browser-not-supported',
    'menu': 'menu',
    'restaurants': 'restaurant',
    'welcome':'hail',
    'about':"info-outline",
    'heritage':"museum",
    'bye':"waving-hand",
    'emergency':"contact-emergency",
    'access.time': 'access-time',
    'house.fill': 'home',
    'house.rules':'rule',
    'paperplane.fill': 'send',
    'chevron.left.forwardslash.chevron.right': 'code',
    'chevron.right': 'chevron-right',
    'chevron.left': 'chevron-left',
    'appliances':'coffee-maker',
    'transport':'commute',
    'poi':'tour',
    'offers':'local-offer'
} as IconMapping;

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
    name = 'default',
    size = 24,
    color,
    mode = 'default',
    style
}: {
    name?: IconSymbolName;
    size?: number;
    mode?: string;
    color?: string | OpaqueColorValue;
    style?: StyleProp<TextStyle>;
    weight?: SymbolWeight;
}) {
    const textColor = useThemeColor({
        context: 'text',
        mode: mode
    });
    return (
        <MaterialIcons
            color={color ?? textColor}
            size={size}
            name={MAPPING[name]}
            style={style}
        />
    );
}
