
import {NavigationIndependentTree,NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator,NativeStackNavigationProp} from '@react-navigation/native-stack';
import { NavinestLoading } from '@/screens/navinest-loading';
import { NavinestKeyIn } from '@/screens/navinest-key-in';


const Stack = createNativeStackNavigator();

export default  () => {
	

	return (
      <NavigationIndependentTree>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="NavinestLoading"
					component={NavinestLoading}
					options={{headerShown:false}}
				/>
				<Stack.Screen
					name="NavinestKeyIn"
					component={NavinestKeyIn}
					options={{headerShown:false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
      </NavigationIndependentTree>
  );
};
