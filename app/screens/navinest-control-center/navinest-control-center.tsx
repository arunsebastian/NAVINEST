import {
    NavigationContainer,
    NavigationIndependentTree
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';

type ScreenConfig = {
    name: string;
    component: React.ComponentType<any>;
    options?: Record<string, any>;
};

type Props = {
    screens?: ScreenConfig[];
    initialRouteName?: string;
};

const Stack = createNativeStackNavigator();

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
const screens: ScreenConfig[] = [
    { name: 'Home', component: Placeholder('Home Screen') },
    { name: 'Details', component: Placeholder('Details Screen') },
    { name: 'Settings', component: Placeholder('Settings Screen') }
];

export const NavinestControlCenter = ({ initialRouteName }: Props) => {
    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName={initialRouteName ?? screens[0]?.name}
                >
                    {screens.map(({ name, component, options }) => (
                        <Stack.Screen
                            key={name}
                            name={name}
                            component={component}
                            options={{
                                headerShown: false
                                //title: Screens.navinestHome.title
                            }}
                        />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
