import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import {
    ThemedDrawer,
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView,
    ThemedText
} from '@/components/themed';
import { IconSymbol } from '@/components/ui';

import { IconButton } from '@/components/ui/IconButton';
import { type ScreenConfig } from '../navinest-hub';

export type HubScreenItemProps = {
    menuExpanded?: boolean;
    screenConfig: ScreenConfig;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10
    },
    leadingControls: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        gap: 5
    },
    headerTitle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    contentText: { fontSize: 16, marginBottom: 16 },
    // primaryButton: {
    //     backgroundColor: '#007AFF',
    //     paddingHorizontal: 16,
    //     paddingVertical: 12,
    //     borderRadius: 8
    // },
    // primaryButtonText: { color: '#fff', fontWeight: '600' },

    drawerContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 20
    },
    drawerTitle: { fontSize: 22, fontWeight: '700', marginBottom: 20 },
    drawerItem: { paddingVertical: 14 },
    drawerItemText: { fontSize: 16 },
    logout: { marginTop: 24 }
});

export const HubItemScreen = ({
    menuExpanded = false,
    screenConfig
}: HubScreenItemProps) => {
    const [open, setOpen] = React.useState(false);
    const drawerWidth = Math.round(SCREEN_WIDTH * 0.22);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    useEffect(() => {
        setOpen(menuExpanded ?? false);
    }, [menuExpanded]);

    useEffect(() => {
        console.log(screenConfig);
    }, [screenConfig]);

    {
        /* I AM HERE - Convert this component to a DrawerNavigation item */
    }

    const renderDrawer = () => (
        <SafeAreaView style={styles.drawerContainer}>
            <ThemedText>{screenConfig?.title}</ThemedText>

            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => {
                    navigation.goBack();
                }}
            >
                <Text style={styles.drawerItemText}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.drawerItem}
                onPress={() => {
                    setOpen(false);
                }}
            >
                <Text style={styles.drawerItemText}>Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.drawerItem, styles.logout]}
                onPress={() => {
                    setOpen(false);
                }}
            >
                <Text style={[styles.drawerItemText, { color: '#d00' }]}>
                    Logout
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

    return (
        <ThemedDrawer
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            drawerStyle={{
                width: drawerWidth
            }}
            drawerType='front'
            keyboardDismissMode='on-drag'
            renderDrawerContent={renderDrawer}
        >
            <ThemedHeader style={styles.header}>
                <View style={styles.leadingControls}>
                    {(screenConfig?.navigateTo || []).length > 0 && (
                        <TouchableOpacity
                            onPress={() => {
                                setOpen(true);
                            }}
                        >
                            <IconSymbol size={30} name='menu' />
                        </TouchableOpacity>
                    )}
                </View>
                <View style={styles.headerTitle}>
                    <IconSymbol size={30} name={screenConfig?.icon} />
                    <ThemedText type='subtitleBold'>
                        {screenConfig?.title}
                    </ThemedText>
                </View>
            </ThemedHeader>
            <ThemedScrollView>
                <View style={styles.content}>
                    <ThemedText type='subtitleBold'>
                        {screenConfig?.content}
                    </ThemedText>
                </View>
            </ThemedScrollView>
            <ThemedFooter>
                <IconButton
                    icon='house.fill'
                    label='Home'
                    buttonStyles={{
                        textStyle: {
                            fontSize: 20,
                            fontWeight: 600,
                            userSelect: 'none'
                        },
                        iconStyle: {
                            size: 30
                        }
                    }}
                    onPress={navigation.goBack}
                />
            </ThemedFooter>
        </ThemedDrawer>
    );
};
