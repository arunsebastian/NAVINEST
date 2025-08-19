import {
    ThemedActivityIndicator,
    ThemedButton,
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedTextInput,
    ThemedView
} from '@/components/themed';
import AppConfig from '@/constants/config';
import Screens from '@/constants/screens';
import Strings from '@/strings';

import { validateAppKey } from '@/utils/app-validation';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';

import { Image } from 'react-native';

import logoImg from '@assets/images/logo.png';

type LoadStatus = {
    success: boolean;
};

type NullableBoolean = boolean | null;

const styles = StyleSheet.create({
    keyInContianer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10
    }
});

export const NavinestLoading = ({
    route: {
        params: { id }
    }
}: any) => {
    const hasFocus = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(true);
    const [inputKey, setInputKey] = useState<string>('');
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

    const authenticateAndProceed = async () => {
        setBusy(true);
        const result = await validateAppKey(String(inputKey));

        setKeyValidated(result.success);
        setBusy(false);
        if (result.success) {
            // Navigate to the key-in screen with the validated key
            router.replace(`/?id=${inputKey}`);
            navigation.replace(Screens.navinestKeyIn, { id: inputKey });
        } else {
            // Handle invalid key case
            console.error(Strings.invalidKey);
        }
    };

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
                    <div style={styles.keyInContianer}>
                        <ThemedTextInput
                            placeholder={Strings.enterKey}
                            value={inputKey}
                            onChangeText={(key) => setInputKey(key)}
                            onSubmitEditing={authenticateAndProceed}
                        />
                        <ThemedButton
                            disabled={
                                String(inputKey).length <
                                AppConfig.minKeyCodeLength
                            }
                            label={Strings.go}
                            onPress={authenticateAndProceed}
                        />
                    </div>
                )}

                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>{Strings.poweredBy}</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
