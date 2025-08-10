import { ThemedActivityIndicator, ThemedFooter, ThemedHeader, ThemedText, ThemedView } from "@/components";
import Screens from '@/constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image } from "react-native";

import logoImg from '@assets/images/logo.png';

export const  NavinestLoading = () => {
  	const navigation =  useNavigation<NativeStackNavigationProp<any>>();
	const [busy,setBusy] = useState<boolean>(true);
	const [hasLoaded,setHasLoaded] = useState<boolean>(true);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			if(hasLoaded){
				const navigateToKeyIn = async () => {
					window.setTimeout(()=>{
						setBusy(false)
						navigation.navigate(Screens.navinestKeyIn)
					},1000)
				};
				navigateToKeyIn();
			}
		});
		//Clean up the event listener when the component unmounts
		return unsubscribe;
	}, [navigation,hasLoaded]);

  return (
    <ThemedView>
		<ThemedHeader/>
		<ThemedView>
			<Image  source={logoImg} onLoadEnd={() => {setHasLoaded(true)}} />
			<ThemedActivityIndicator animating={busy}/>
		</ThemedView>
		<ThemedFooter>
			<ThemedText type="subtitle">Powered By Navinest</ThemedText>
		</ThemedFooter>
    </ThemedView>
  );
}
