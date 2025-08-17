import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useState } from 'react';
import { Image, TextInput } from 'react-native';
import styles from './styles';

import logoImg from '@assets/images/logo.png';

type LoadStatus = {
    success: boolean;
};

// {
//     props: {
//         route: {
//             params: { id = 'maithreyan' }
//         }
//     }
// }: any

export const NavinestLoading = ({
    route: {
        params: { id = 'maithreyan' }
    }
}: any) => {
    const hasFocus = useIsFocused();

    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(true);
    const [loadStaus, setLoadStatus] = useState<LoadStatus>({
        success: false
    });
    console.log('I am here');

    // useEffect(() => {
    //     if (navigation && loadStaus.success) {
    //         if (!hasFocus) {
    //             const unsubscribe = navigation.addListener('focus', () => {
    //                 const navigateToKeyIn = async () => {
    //                     window.setTimeout(() => {
    //                         setBusy(false);
    //                         //navigation.navigate(Screens.navinestKeyIn);
    //                     }, 1000);
    //                 };
    //                 navigateToKeyIn();
    //             });
    //             //Clean up the event listener when the component unmounts
    //             return unsubscribe;
    //         } else {
    //             window.setTimeout(() => {
    //                 setBusy(false);
    //                 //navigation.navigate(Screens.navinestKeyIn);
    //             }, 1000);
    //         }
    //     }
    // }, [navigation, loadStaus.success]);
    // useEffect(() => {
    //     console.log('NavinestLoading: props', id);
    // }, [id]);

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
                <TextInput
                    style={styles.keyIn}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder='Enter your Navinest Key'
                />
                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>Powered By Navinest</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
