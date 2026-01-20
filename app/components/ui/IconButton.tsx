import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import { IconSymbol } from './IconSymbol';

export type IconButtonProps = TouchableOpacityProps & {
    icon: string;
    label?: string;
    onPress?: () => void;
    children?: React.ReactNode[];
    buttonStyles?: {
        iconStyle?: Record<string, any>;
        textStyle?: Record<string, any>;
    };
};

const styles = StyleSheet.create({
    iconButton: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

export const IconButton = ({
    icon,
    label,
    onPress,
    children,
    buttonStyles = {
        iconStyle: {},
        textStyle: {}
    },
    ...otherProps
}: IconButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onPress && onPress()}
            activeOpacity={0.8}
        >
            {icon && (
                <IconSymbol
                    name={icon}
                    size={buttonStyles?.iconStyle?.size || 30}
                />
            )}
            {label && <Text style={buttonStyles?.textStyle}>{label}</Text>}
            {children}
        </TouchableOpacity>
    );
};
