import Screens from '@/constants/screens';
import { NavinestHome } from '@/screens/navinest-home';
import { NavinestKeyIn } from '@/screens/navinest-key-in';
import { NavinestLoading } from '@/screens/navinest-loading';
import { validateAppKey } from '@/utils/app-validation';
import {
    NavigationContainer,
    NavigationIndependentTree
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

/**
 * Root element for the application.
 * This component checks if the app key is valid and renders the appropriate screen.
 */
const RootElement = () => {
    const { id } = useLocalSearchParams();
    const [appValidated, setAppValidated] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            const result = await validateAppKey(String(id));
            setAppValidated(result.success);
        })();
    }, [id]);

    return appValidated ? (
        <NavigationIndependentTree>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={Screens.navinestHome}
                        component={NavinestHome}
                        initialParams={{ id: id }}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </NavigationIndependentTree>
    ) : (
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
