import type { ReactElement } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import Animated, {
    interpolate,
    useAnimatedRef,
    useAnimatedStyle,
    useScrollViewOffset
} from 'react-native-reanimated';

import { ThemedView } from '@/components/themed/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { useThemeColor } from '@/hooks/useThemeColor';

const HEADER_HEIGHT = 250;

export type ThemedParallaxScrollViewProps = ViewProps & {
    mode?: string;
    headerImage?: ReactElement;
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: HEADER_HEIGHT,
        overflow: 'hidden'
    },
    content: {
        flex: 1,
        padding: 32,
        gap: 16,
        overflow: 'hidden'
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
    const headerBackgroundColor = useThemeColor({
        context: 'toolbarBackGround',
        mode: mode
    });
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);
    const bottom = useBottomTabOverflow();
    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                    )
                },
                {
                    scale: interpolate(
                        scrollOffset.value,
                        [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                        [2, 1, 1]
                    )
                }
            ]
        };
    });

    return (
        <ThemedView style={[{ backgroundColor }, styles.container, style]}>
            <Animated.ScrollView
                ref={scrollRef}
                scrollEventThrottle={16}
                scrollIndicatorInsets={{ bottom }}
                contentContainerStyle={{ paddingBottom: bottom }}
            >
                <Animated.View
                    style={[
                        styles.header,
                        { backgroundColor: headerBackgroundColor },
                        headerAnimatedStyle
                    ]}
                >
                    {headerImage}
                </Animated.View>
                <View style={styles.content}>{children}</View>
            </Animated.ScrollView>
        </ThemedView>
    );
};
