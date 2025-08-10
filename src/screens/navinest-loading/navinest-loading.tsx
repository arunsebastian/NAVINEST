import { ThemedFooter } from "@/components/ThemedFooter";
import { ThemedHeader } from "@/components/ThemedHeader";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
//import Screens from '@/constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image } from "react-native";

import logoImg from '@assets/images/logo.png';

export const  NavinestLoading = () => {
  	const navigation =  useNavigation<NativeStackNavigationProp<any>>();
	const [loading,setLoading] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			const navigateToKeyIn = async () => {
			window.setTimeout(()=>{
				setLoading(false)
				//navigation.navigate(Screens.navinestKeyIn)
			},2000)
		};
		navigateToKeyIn();
	});

	// Clean up the event listener when the component unmounts
	return unsubscribe;
	}, [navigation]);

  return (
    <ThemedView>
		<ThemedHeader/>
		<ThemedView>
			<Image  source={logoImg} />
			<ActivityIndicator size={50} color="#F97E25" animating={loading}/>
		</ThemedView>
		<ThemedFooter>
			<ThemedText type="subtitle">Powered By Navinest</ThemedText>
		</ThemedFooter>
    </ThemedView>
  );
}
