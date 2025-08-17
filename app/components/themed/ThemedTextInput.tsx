import { StyleSheet, type TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput } from 'react-native';

export type ThemedTextInputProps = TextInputProps & {
    mode?: string;
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
});

export const ThemedTextInput = ({
    style,
    mode = 'default',
    ...otherProps
}: ThemedTextInputProps) => {
    const borderColor = useThemeColor({
        context: 'textInputBorder',
        mode: mode
    });

    return (
        <TextInput
            style={[{ borderColor }, styles.textInput, style]}
            {...otherProps}
        />
    );
};
