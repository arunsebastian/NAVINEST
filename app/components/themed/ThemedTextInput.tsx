import { StyleSheet, type TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { TextInput } from 'react-native';

export type ThemedTextInputProps = TextInputProps & {
    mode?: string;
    ref?: React.Ref<typeof TextInput>;
};

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    }
});

export const ThemedTextInput = ({
    style,
    ref,
    mode = 'default',
    ...otherProps
}: ThemedTextInputProps) => {
    const borderColor = useThemeColor({
        context: 'textInputBorder',
        mode: mode
    });

    return (
        <TextInput
            ref={ref as any}
            style={[{ borderColor }, styles.textInput, style]}
            {...otherProps}
        />
    );
};
