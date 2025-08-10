import { Text, View,ActivityIndicator } from "react-native";
import { styles } from "./styles";
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect ,useState} from 'react';
import Screens  from "@/constants/screens";


export const  NavinestLoading = () => {
  	const navigation =  useNavigation<NativeStackNavigationProp<any>>();
	const [loading,setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			const navigateToKeyIn = async () => {
			window.setTimeout(()=>{
				setLoading(false)
				navigation.navigate(Screens.navinestKeyIn)
			},1000)
		};
		navigateToKeyIn();
	});

	// Clean up the event listener when the component unmounts
	return unsubscribe;
	}, [navigation]);

  return (
    <View style={styles.container}>
		<ActivityIndicator size={50} color="blue" animating={loading}/>
      	<Text>NavinestLoading..</Text>
    </View>
  );
}
