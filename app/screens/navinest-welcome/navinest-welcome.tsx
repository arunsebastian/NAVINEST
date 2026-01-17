import AppConfig from '@/constants/config';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import {
    ThemedActivityIndicator,
    ThemedButton,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';

import { VerticalSpacer } from '@/components/ui';
import { Screens } from '@/constants/screens';
import Strings from '@/strings';
import { getPropertyData } from '@/utils/app-validation';

const styles = StyleSheet.create({
    barcode: {
        width: 150,
        height: 150
    },
    homeBtnContainer: { marginTop: 20 }
});

export const NavinestWelcome = ({
    route: {
        params: { id }
    }
}: any) => {
    const hasFocus = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [propertyData, setPropertyData] = useState<Record<string, any>>();
    const [busy, setBusy] = useState<boolean>(false);

    useEffect(() => {
        if (hasFocus) {
            (async () => {
                setBusy(true);
                setPropertyData(await getPropertyData(String(id)));
                setBusy(false);
            })();
        }
    }, [id, hasFocus]);

    const proceedToHub = async () => {
        navigation.replace(Screens.navinestHub.key, {
            id: id,
            data: propertyData
        });
    };

    useEffect(() => {
        if (propertyData && navigation) {
            // Set a timeout to navigate to the next screen after the delay set in config
            const timeoutId = setTimeout(() => {
                proceedToHub();
            }, AppConfig.homeScreenTransitionDelay * 1000);

            // Cleanup function to clear the timeout when the component unmounts
            return () => clearTimeout(timeoutId);
        }
    }, [navigation, propertyData]);

    return (
        <ThemedView>
            <ThemedHeader />
            {propertyData && (
                <ThemedView>
                    <div title={Strings.scanQRCode}>
                        <Image
                            source={{ uri: propertyData?.barcode }}
                            style={styles.barcode}
                            resizeMode='contain'
                        />
                    </div>
                    <VerticalSpacer />
                    <ThemedText type='subtitle'>Welcome To</ThemedText>
                    <VerticalSpacer />
                    {propertyData?.property?.name && (
                        <ThemedText type='title'>
                            {propertyData?.property?.name}
                        </ThemedText>
                    )}
                    <ThemedText type='title'>
                        {propertyData?.property?.address}
                    </ThemedText>
                    <VerticalSpacer />
                    <ThemedText type='subtitle'>
                        {`${Strings.hostedBy} ${propertyData?.property?.owner}`}
                    </ThemedText>
                    <ThemedButton
                        style={{ containerStyles: styles.homeBtnContainer }}
                        label={Strings.home}
                        onPress={proceedToHub}
                    />
                </ThemedView>
            )}
            <ThemedActivityIndicator animating={busy} />
            <ThemedFooter>
                <ThemedText type='subtitle'>{Strings.poweredBy}</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
