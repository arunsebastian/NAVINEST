import Screens from '@/constants/screens';
import { NavinestHome, NavinestKeyIn, NavinestWelcome } from '@/screens';

import {
    NavigationContainer,
    NavigationIndependentTree
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useLocalSearchParams } from 'expo-router';

const Stack = createNativeStackNavigator();

/**
 * Root element for the application.
 * This component checks if the app key is valid and renders the appropriate screen.
 */
const RootElement = () => {
    const { id } = useLocalSearchParams();

    return (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Screens.navinestKeyIn.key}
                        component={NavinestKeyIn}
                        initialParams={{ id: id }}
                        options={{
                            headerShown: false,
                            title: Screens.navinestKeyIn.title
                        }}
                    />
                    <Stack.Screen
                        name={Screens.navinestWelcome.key}
                        component={NavinestWelcome}
                        initialParams={{ id: id }}
                        options={{
                            headerShown: false,
                            title: Screens.navinestWelcome.title
                        }}
                    />
                    <Stack.Screen
                        name={Screens.navinestHome.key}
                        component={NavinestHome}
                        initialParams={{ id: id }}
                        options={{
                            headerShown: false,
                            title: Screens.navinestHome.title
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
export default RootElement;
