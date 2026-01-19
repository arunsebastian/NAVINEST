import { HubScreens } from '@/constants/screens';
import { useDeviceType } from '@/hooks';
import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Home, HubItemScreen } from './navinest-hub-items';

export type ScreenConfig = {
    id: string;
    title: string;
    content: string;
};

const HubStack = createNativeStackNavigator();

export const NavinestHub = () => {
    const { id, data } = useRoute().params as any;
    const [hubScreens, setHubScreens] = React.useState<ScreenConfig[]>([]);
    const { isTablet } = useDeviceType();

    useEffect(() => {
        if (data && Array.isArray(data.pages)) {
            const screens = [...data.pages].map((page) => page);
            setHubScreens(screens);
        }
    }, [data]);

    return (
        <HubStack.Navigator initialRouteName={HubScreens.home.key}>
            <HubStack.Screen
                name={HubScreens.home.key}
                initialParams={{ id: id, data: data }}
                component={Home}
                options={{
                    headerShown: false,
                    title: HubScreens.home.title
                }}
            />
            {hubScreens.map(
                (screenConfig: ScreenConfig) => (
                    console.log('Adding screen:', screenConfig),
                    (
                        <HubStack.Screen
                            key={screenConfig.id}
                            name={screenConfig.title}
                            options={{
                                headerShown: false,
                                title: screenConfig.title
                            }}
                        >
                            {() => (
                                <HubItemScreen
                                    screenConfig={screenConfig}
                                    menuExpanded={isTablet ? true : false}
                                    isTablet={isTablet}
                                />
                            )}
                        </HubStack.Screen>
                    )
                )
            )}
        </HubStack.Navigator>
    );
};
