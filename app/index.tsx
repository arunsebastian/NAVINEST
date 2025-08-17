import Screens from '@/constants/screens';
import { NavinestKeyIn } from '@/screens/navinest-key-in';
import { NavinestLoading } from '@/screens/navinest-loading';

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
                        name={Screens.navinestLoding}
                        component={NavinestLoading}
                        initialParams={{ id: id }}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name={Screens.navinestKeyIn}
                        component={NavinestKeyIn}
                        initialParams={{ id: id }}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    );
};
export default RootElement;
