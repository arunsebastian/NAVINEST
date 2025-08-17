import {
    ThemedActivityIndicator,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';
import Screens from '@/constants/screens';
import { validateAppKey } from '@/utils/app-validation';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';

import { Image, TextInput } from 'react-native';
import styles from './styles';

import logoImg from '@assets/images/logo.png';

type LoadStatus = {
    success: boolean;
};

type NullableBoolean = boolean | null;

export const NavinestLoading = ({
    route: {
        params: { id }
    }
}: any) => {
    const hasFocus = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(true);
    const [keyValidated, setKeyValidated] = useState<NullableBoolean>(null);
    const [loadStaus, setLoadStatus] = useState<LoadStatus>({
        success: false
    });

    useEffect(() => {
        if (hasFocus) {
            (async () => {
                const result = await validateAppKey(String(id));
                setKeyValidated(result.success);
            })();
        }
    }, [id, hasFocus]);

    useEffect(() => {
        if (
            typeof keyValidated == 'boolean' &&
            keyValidated &&
            loadStaus.success
        ) {
            navigation.navigate(Screens.navinestKeyIn);
            setBusy(false);
        } else if (typeof keyValidated == 'boolean' && loadStaus.success) {
            setBusy(false);
        }
    }, [keyValidated, loadStaus.success]);

    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>
                <Image
                    source={logoImg}
                    onLoadEnd={() => {
                        !loadStaus.success &&
                            setLoadStatus({ success: !loadStaus.success });
                    }}
                />
                {typeof keyValidated == 'boolean' && !keyValidated && (
                    <TextInput
                        style={styles.keyIn}
                        placeholder='Enter your Navinest Key'
                    />
                )}

                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>Powered By Navinest</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
