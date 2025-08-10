import {NavigationIndependentTree,NavigationContainer,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavinestLoading } from '@/screens/navinest-loading';
import { NavinestKeyIn } from '@/screens/navinest-key-in';
import { NavinestHome } from '@/screens/navinest-home';
import Screens from '@/constants/screens';

const Stack = createNativeStackNavigator();

export default  () => {
	return (
      <NavigationIndependentTree>
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={Screens.navinestLoding}
					component={NavinestLoading}
					options={{headerShown:false}}
				/>
				<Stack.Screen
					name={Screens.navinestKeyIn}
					component={NavinestKeyIn}
					options={{headerShown:false}}
				/>
				<Stack.Screen
					name={Screens.navinestHome}
					component={NavinestHome}
					options={{headerShown:false}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
     </NavigationIndependentTree>
  );
};
