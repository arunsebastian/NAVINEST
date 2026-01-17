import {
    NavigationContainer,
    NavigationIndependentTree,
    useRoute
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Text, View } from 'react-native';

import { HubScreens } from '@/constants/screens';
import { Home } from './navinest-hub-items';

type ScreenConfig = {
    name: string;
    component: React.ComponentType<any>;
    options?: Record<string, any>;
};

const HubStack = createNativeStackNavigator();

const Placeholder =
    (label: string): React.FC =>
    () =>
        (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text>{label}</Text>
            </View>
        );

// Default dynamic screens (replace or pass `screens` prop to override)
// const screens: ScreenConfig[] = [
//     { name: 'Home', component: Placeholder('Home Screen') },
//     { name: 'Details', component: Placeholder('Details Screen') },
//     { name: 'Settings', component: Placeholder('Settings Screen') }
// ];

export const NavinestHub = () => {
    const { id, data } = useRoute().params as any;
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <HubStack.Navigator>
                    <HubStack.Screen
                        name={HubScreens.navinestHome.key}
                        component={Home}
                        initialParams={{ id: id, data: data }}
                        options={{
                            headerShown: false,
                            title: HubScreens.navinestHome.title
                        }}
                    />
                    {/* {screens.map(({ name, component, options }) => (
                        <HubStack.Screen
                            key={name}
                            name={name}
                            component={component}
                            options={{
                                headerShown: false,
                                title: name
                            }}
                        />
                    ))} */}
                </HubStack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
