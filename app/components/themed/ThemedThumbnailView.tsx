import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, View, type ViewProps } from 'react-native';

type ThemedThumbnailViewProps = ViewProps & {
    mode?: string;
};

const styles = StyleSheet.create({
    view: {
        padding: 10,
        height: 130,
        borderRadius: 8,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    }
});

export const ThemedThumbnailView = ({
    style,
    mode = 'default',
    ...otherProps
}: ThemedThumbnailViewProps) => {
    const backgroundColor = useThemeColor({
        context: 'toolbarBackGround',
        mode: mode
    });
    const thumbnailShadowStyle = {
        shadowColor: useThemeColor({
            context: 'thumbnailShadowColor',
            mode: mode
        }),
        shadowOffset: { width: 5, height: 8 }, // iOS
        shadowOpacity: 0.9, // iOS
        shadowRadius: 10, // iOS
        elevation: 5 // Android
    };

    return (
        <View
            style={[
                { backgroundColor },
                thumbnailShadowStyle,
                styles.view,
                style
            ]}
            {...otherProps}
        />
    );
};
