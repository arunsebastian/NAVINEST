import { useThemeColor } from '@/hooks/useThemeColor';
import { Drawer } from 'react-native-drawer-layout';

export const ThemedDrawer = ({
    drawerStyle,
    mode = 'default',
    ...otherProps
}: any) => {
    const backgroundColor = useThemeColor({
        context: 'leftPanelBackGround',
        mode: mode
    });

    return (
        <Drawer
            drawerStyle={[{ backgroundColor }, drawerStyle]}
            {...otherProps}
        />
    );
};
