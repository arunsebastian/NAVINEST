import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components';
import Screens from '@/constants/screens';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import logoImg from '@assets/images/logo.png';

type LoadStatus = {
    success: boolean;
};

export const NavinestLoading = () => {
    const hasFocus = useIsFocused();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(true);
    const [loadStaus, setLoadStatus] = useState<LoadStatus>({
        success: false
    });

    useEffect(() => {
        if (navigation && loadStaus.success) {
            if (!hasFocus) {
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
            } else {
                window.setTimeout(() => {
                    setBusy(false);
                    navigation.navigate(Screens.navinestKeyIn);
                }, 1000);
            }
        }
    }, [navigation, loadStaus.success, hasFocus]);

    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>
                <Image
                    source={logoImg}
                    onLoadEnd={() => {
                        setLoadStatus({ success: true });
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
