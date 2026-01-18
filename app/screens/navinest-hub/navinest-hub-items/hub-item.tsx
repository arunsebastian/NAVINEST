import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { ScreenConfig } from '../navinest-hub';

type HubItemProps = {
    screenConfig: ScreenConfig;
    drawerWidth?: number;
    initialCollapsed?: boolean;
};

export const HubItem: React.FC<HubItemProps> = ({
    screenConfig,
    drawerWidth = 280,
    initialCollapsed = true
}) => {
    const translateX = React.useRef(
        new Animated.Value(initialCollapsed ? -drawerWidth : 0)
    ).current;
    const [open, setOpen] = React.useState(!initialCollapsed);

    const openDrawer = React.useCallback(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 220,
            useNativeDriver: false
        }).start(() => setOpen(true));
    }, [translateX]);

    const closeDrawer = React.useCallback(() => {
        Animated.timing(translateX, {
            toValue: -drawerWidth,
            duration: 220,
            useNativeDriver: false
        }).start(() => setOpen(false));
    }, [translateX, drawerWidth]);

    const toggleDrawer = React.useCallback(() => {
        open ? closeDrawer() : openDrawer();
    }, [open, openDrawer, closeDrawer]);

    return (
        <View style={{ flex: 1 }}>
            <Animated.View
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: drawerWidth,
                    transform: [{ translateX }],
                    zIndex: 10
                }}
            ></Animated.View>

            <View style={{ flex: 1 }}>{screenConfig.content}</View>

            {open ? (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={closeDrawer}
                    style={{
                        position: 'absolute',
                        left: drawerWidth,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.2)'
                    }}
                />
            ) : null}

            {/* Expose a simple toggle via a small floating button */}
            <TouchableOpacity
                accessibilityLabel={open ? 'Close drawer' : 'Open drawer'}
                onPress={toggleDrawer}
                style={{
                    position: 'absolute',
                    left: 8,
                    top: 8,
                    zIndex: 20,
                    padding: 8,
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: 'rgba(0,0,0,0.08)'
                }}
            >
                <Text>{open ? '←' : '☰'}</Text>
            </TouchableOpacity>
        </View>
    );
};
