import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';

import { VerticalSpacer } from '@/components/ui';

import Strings from '@/strings';

import { getPropertyData } from '@/utils/app-validation';

const styles = StyleSheet.create({
    barcode: {
        width: 150,
        height: 150
    }
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

    // useEffect(() => {
    //     if (
    //         typeof keyValidated == 'boolean' &&
    //         keyValidated &&
    //         loadStaus.success
    //     ) {
    //         navigation.navigate(Screens.navinestKeyIn, { id: inputKey });
    //         setBusy(false);
    //     } else if (typeof keyValidated == 'boolean' && loadStaus.success) {
    //         setBusy(false);
    //     }
    // }, [keyValidated, loadStaus.success]);

    // I AM HERE
    //::: 1. Make this below tsx more readable and styled :::
    //::: 2. Start schema building and ui for home page::

    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>
                {propertyData ? (
                    <>
                        <div>
                            <Image
                                source={{ uri: propertyData?.barcode }}
                                style={styles.barcode}
                                onLoadEnd={() => {
                                    // !loadStaus.success &&
                                    //     setLoadStatus({ success: !loadStaus.success });
                                }}
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
                            Hosted by {propertyData?.property?.owner}
                        </ThemedText>
                    </>
                ) : null}

                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>{Strings.poweredBy}</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
