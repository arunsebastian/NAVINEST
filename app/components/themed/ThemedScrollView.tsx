import React, { ReactElement } from 'react';
import { type ViewProps, StyleSheet } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import { ThemedView } from '@/components/themed/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedScrollViewProps = ViewProps & {
    mode?: string;
    footer?: ReactElement;
    header?: ReactElement;
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%'
    },
    scrollView: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        width: '100%',
        height: '100%',
        padding: 20,
        border: '1px solid purple'
    }
});

export const ThemedScrollView = ({
    style,
    mode = 'default',
    header,
    footer,
    children,
    ...otherProps
}: ThemedScrollViewProps) => {
    const backgroundColor = useThemeColor({
        context: 'appBackground',
        mode: mode
    });
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    return (
        <ThemedView style={[{ backgroundColor }, styles.view]}>
            {header ? header : null}
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                style={[styles.scrollView, style]}
            >
                {children}
            </Animated.ScrollView>
            {footer ? footer : null}
        </ThemedView>
    );
};
