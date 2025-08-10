import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components';
import Screens from '@/constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import logoImg from '@assets/images/logo.png';

export const NavinestLoading = (props: any) => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(true);
    const [resourcesLoaded, setResourcesLoaded] = useState<boolean>(true);

    useEffect(() => {
        if (navigation && resourcesLoaded) {
            console.log(props);
            const unsubscribe = navigation.addListener('focus', () => {
                const navigateToKeyIn = async () => {
                    window.setTimeout(() => {
                        setBusy(false);
                        navigation.navigate(Screens.navinestKeyIn);
                    }, 1000);
                };
                navigateToKeyIn();
            });
            //Clean up the event listener when the component unmounts
            return unsubscribe;
        }
    }, [resourcesLoaded, props]);

    // I AM HERE BELOW
    // I dont think we need the below code seperately - try and integrate on to the effect above with a time out

    useEffect(() => {
        console.log(props.route.params);
    }, [props.route.params]);

    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>
                <Image
                    source={logoImg}
                    onLoadEnd={() => {
                        setResourcesLoaded(true);
                    }}
                />
                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>Powered By Navinest</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
