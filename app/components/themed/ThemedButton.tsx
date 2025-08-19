import {
    Animated,
    Pressable,
    StyleSheet,
    Text,
    type PressableProps
} from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = PressableProps & {
    mode?: string;
    label?: string;
    img?: string;
    onPress?: () => void;
    style?: {
        containerStyles?: Record<string, any>;
        textStyles?: Record<string, any>;
    };
};

const createComponentStyles = ({ disabled }: any) => {
    // Define styles for the button container and text
    // The styles will change based on the disabled state
    return StyleSheet.create({
        buttonContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            borderRadius: 5,
            padding: 15,
            backgroundColor: 'red',
            opacity: disabled ? 0.5 : 1
        },
        buttonText: {
            fontSize: 15,
            userSelect: 'none'
        }
    });
};

export const ThemedButton = ({
    style = {
        containerStyles: {},
        textStyles: {}
    },
    label,
    mode = 'default',
    ...otherProps
}: ThemedButtonProps) => {
    const backgroundColorRef = new Animated.Value(0);
    // Get the text colors based on the theme mode
    const backgroundColorDefault = useThemeColor({
        context: 'buttonBackgroundDefault',
        mode: mode
    });
    const backgroundColorPressed = useThemeColor({
        context: 'buttonBackgroundPressed',
        mode: mode
    });
    const color = useThemeColor({
        context: 'buttonText',
        mode: mode
    }) as string;

    // Interpolate the background color
    const backgroundColor = backgroundColorRef.interpolate({
        inputRange: [0, 1],
        outputRange: [backgroundColorDefault, backgroundColorPressed]
    });

    const handleHoverIn = () => {
        Animated.timing(backgroundColorRef, {
            toValue: 1,
            duration: 60,
            useNativeDriver: true
        }).start();
    };
    const handleHoverOut = () => {
        Animated.timing(backgroundColorRef, {
            toValue: 0,
            duration: 60,
            useNativeDriver: true
        }).start();
    };

    const handlePressWithCallback: () => void = () => {
        if (otherProps.onPress) {
            otherProps.onPress();
        }
    };

    const styles = createComponentStyles(otherProps);

    return (
        <Pressable
            {...otherProps}
            onPress={handlePressWithCallback}
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
        >
            <Animated.View
                style={[
                    styles.buttonContainer,
                    { backgroundColor },
                    style.containerStyles
                ]}
            >
                <Text
                    style={[
                        { ...styles.buttonText },
                        { color: color },
                        { ...style.textStyles }
                    ]}
                >
                    {label || 'Button'}
                </Text>
            </Animated.View>
        </Pressable>
    );
};
