import { ThemedScrollView, ThemedText } from '@/components/themed';
import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { type ScreenConfig } from '../navinest-hub';

export type HubScreenItemProps = {
    menuExpanded?: boolean;
    screenConfig: ScreenConfig;
};

export const HubItemScreen = ({
    menuExpanded = false,
    screenConfig: ScreenConfig
}: HubScreenItemProps) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(menuExpanded ?? false);
    }, [menuExpanded]);

    // I AM HERE IN THIS FILE. Make ThemedIconButton that toggles drawer open/close with Pressable
    //then render drawer content with menu items from screenConfig

    return (
        <Drawer
            open={menuExpanded ?? open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderDrawerContent={() => {
                return <Text>Drawer content</Text>;
            }}
        >
            <TouchableOpacity
                accessibilityLabel={open ? 'Close drawer' : 'Open drawer'}
                onPress={() => setOpen((prevOpen) => !prevOpen)}
                style={{
                    // position: 'absolute',
                    // left: 8,
                    // top: 8,
                    // zIndex: 20,
                    // padding: 8,
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.08)'
                }}
            >
                <Text>{open ? '←' : '☰'}</Text>
            </TouchableOpacity>
            <ThemedScrollView>
                <ThemedText>Hello world</ThemedText>
            </ThemedScrollView>
        </Drawer>
    );
};
