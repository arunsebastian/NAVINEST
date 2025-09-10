import Screens from '@/constants/screens';
import { NavinestWelcome } from '@/screens/navinest-welcome';
import { NavinestKeyIn } from '@/screens/navinest-keyin';

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
                        name={Screens.navinestKeyIn}
                        component={NavinestKeyIn}
                        initialParams={{ id: id }}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Screens.navinestWelcome}
                        component={NavinestWelcome}
                        initialParams={{ id: id }}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
export default RootElement;
