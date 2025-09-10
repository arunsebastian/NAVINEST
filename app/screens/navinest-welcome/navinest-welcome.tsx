import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';
import Screens from '@/constants/screens';
import Strings from '@/strings';

import { getPropertyData } from '@/utils/app-validation';

const styles = StyleSheet.create({
    welcome: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10
    }
});


export const NavinestWelcome = ({
    route: {
        params: { id }
    }
}: any) => {
    const hasFocus = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [propertyData,setPropertyData] = useState<Record<string,any>>();
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
         
               
                {propertyData?
                (<>
                   <Image
                        source={{uri:propertyData?.barcode}}
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        // onLoadEnd={() => {
                        //     !loadStaus.success &&
                        //         setLoadStatus({ success: !loadStaus.success });
                        // }}
                    />
                    <ThemedText type='title'>
                        {propertyData?.property?.address}
                    </ThemedText>
                    <ThemedText type='subtitle'>
                        Hosted by {propertyData?.property?.owner}
                    </ThemedText></>):null
                }

                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>{Strings.poweredBy}</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
