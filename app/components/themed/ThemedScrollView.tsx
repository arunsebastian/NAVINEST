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
    scrollView: {
        flex: 1,
        width: '100%',
        padding: 20
    },
    content: {
        width: '100%'
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
        <ThemedView style={[{ backgroundColor }]}>
            {header ? header : null}
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                style={[styles.scrollView, style]}
            >
                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
            {footer ? footer : null}
        </ThemedView>
    );
};
