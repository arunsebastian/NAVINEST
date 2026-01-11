import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedHeaderProps = ViewProps & {
    mode?: string;
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        height: 50,
        width: '100%'
    }
});

export const ThemedHeader = ({
    style,
    mode = 'default',
    ...otherProps
}: ThemedHeaderProps) => {
    const backgroundColor = useThemeColor({
        context: 'toolbarBackGround',
        mode: mode
    });

    return (
        <View
            style={[{ backgroundColor }, styles.header, style]}
            {...otherProps}
        />
    );
};
