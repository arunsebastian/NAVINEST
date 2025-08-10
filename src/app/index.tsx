import Screens from '@/constants/screens';
import { NavinestHome } from '@/screens/navinest-home';
import { NavinestKeyIn } from '@/screens/navinest-key-in';
import { NavinestLoading } from '@/screens/navinest-loading';
import { NavigationContainer, NavigationIndependentTree, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RootElement = () => {
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
export default  RootElement