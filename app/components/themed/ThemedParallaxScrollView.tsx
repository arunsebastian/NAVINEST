import type { ReactElement } from 'react';
import { type ViewProps, StyleSheet } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';

import { ThemedView } from '@/components/themed/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedFooter } from './ThemedFooter';
import { ThemedHeader } from './ThemedHeader';

export type ThemedParallaxScrollViewProps = ViewProps & {
    mode?: string;
    headerImage?: ReactElement;
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

export const ThemedParallaxScrollView = ({
    style,
    mode = 'default',
    children,
    headerImage,
    ...otherProps
}: ThemedParallaxScrollViewProps) => {
    const backgroundColor = useThemeColor({
        context: 'appBackground',
        mode: mode
    });
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    return (
        <ThemedView style={[{ backgroundColor }]}>
            <ThemedHeader />
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                style={[styles.scrollView, style]}
            >
                <ThemedView style={styles.content}>{children}</ThemedView>
            </Animated.ScrollView>
            <ThemedFooter />
        </ThemedView>
    );
};
