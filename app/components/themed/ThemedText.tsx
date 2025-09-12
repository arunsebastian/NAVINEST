import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
    mode?: string;
    type?:
        | 'default'
        | 'title'
        | 'defaultSemiBold'
        | 'subtitle'
        | 'link'
        | 'error';
};

export function ThemedText({
    style,
    mode = 'default',
    type = 'default',
    ...rest
}: ThemedTextProps) {
    const color = useThemeColor({ context: 'text', mode: mode });

    const styles = StyleSheet.create({
        default: {
            fontSize: 16,
            lineHeight: 24
        },
        defaultSemiBold: {
            fontSize: 16,
            lineHeight: 24,
            fontWeight: '600'
        },
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            lineHeight: 32
        },
        subtitle: {
            fontSize: 20,
            fontWeight: '400'
        },
        link: {
            lineHeight: 30,
            fontSize: 16,
            color: '#0a7ea4'
        },
        error: {
            fontSize: 14,
            color: 'red'
        }
    });

    return (
        <Text
            style={[
                { color },
                type === 'default' ? styles.default : undefined,
                type === 'title' ? styles.title : undefined,
                type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
                type === 'subtitle' ? styles.subtitle : undefined,
                type === 'link' ? styles.link : undefined,
                type === 'error' ? styles.error : undefined,
                style
            ]}
            {...rest}
        />
    );
}
