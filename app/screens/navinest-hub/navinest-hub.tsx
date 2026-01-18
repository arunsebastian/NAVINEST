import { useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';

import { HubScreens } from '@/constants/screens';
import { Home, HubItem } from './navinest-hub-items';

export type ScreenConfig = {
    id: string;
    title: string;
    content: string;
};

const HubStack = createNativeStackNavigator();

export const NavinestHub = () => {
    const { id, data } = useRoute().params as any;
    const [hubScreens, setHubScreens] = React.useState<ScreenConfig[]>([]);

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
                                headerShown: true,
                                title: screenConfig.title
                            }}
                        >
                            {() => <HubItem screenConfig={screenConfig} />}
                        </HubStack.Screen>
                    )
                )
            )}
        </HubStack.Navigator>
    );
};
