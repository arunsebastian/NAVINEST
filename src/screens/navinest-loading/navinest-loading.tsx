import { Text, View } from "react-native";
import { styles } from "./styles";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export const  NavinestLoading = () => {
  	const navigation =  useNavigation<NativeStackNavigationProp<any>>();
	
	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			console.log('MyScreen is focused!');
			const navigateToKeyIn = async () => {
				window.setTimeout(()=>{
				navigation.navigate('NavinestKeyIn')
			},100)
		};
		navigateToKeyIn();
	});

	// Clean up the event listener when the component unmounts
	return unsubscribe;
	}, [navigation]);

  return (
    <View
      style={styles.container}
    >
      <Text>NavinestLoading..</Text>
    </View>
  );
}
