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
import Screens from '@/constants/screens';
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

    const proceedToHome = async () => {
        navigation.replace(Screens.navinestHome.key, {
            id: id,
            data: propertyData
        });
    };

    // I AM HERE
    //::: Start schema building and ui for home page::

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
                        onPress={proceedToHome}
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
