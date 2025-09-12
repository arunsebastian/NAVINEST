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

type NullableBoolean = boolean | null;

const styles = StyleSheet.create({
    keyInContianer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10
    },
    errorText: {
        marginTop: 5
    }
});

export const NavinestKeyIn = ({
    route: {
        params: { id }
    }
}: any) => {
    const hasFocus = useIsFocused();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const [busy, setBusy] = useState<boolean>(false);
    const [inputKey, setInputKey] = useState<string>('');

    ///////// ::::IMPORTANT

    // TODO:::
    // validation of property key and fetching property data has to be at one go and subsequently passed
    //  on to welcome screen so that screen does not have to fetch it again

    const [keyValidated, setKeyValidated] = useState<NullableBoolean>(null);

    ///////////////////////////////////////////////////////////////////

    const [showKeyValidationError, setShowKeyValidationError] =
        useState<boolean>(false);
    const [loadStaus, setLoadStatus] = useState<any>({
        success: false
    });

    useEffect(() => {
        if (hasFocus) {
            (async () => {
                setBusy(true);
                const result = await validateAppKey(id);
                setInputKey(id ? id : '');
                setKeyValidated(result.success);
                if (id && id.length) {
                    setShowKeyValidationError(!result.success);
                }
                setBusy(false);
            })();
        }
    }, [id, hasFocus]);

    useEffect(() => {
        if (
            typeof keyValidated == 'boolean' &&
            keyValidated &&
            loadStaus.success
        ) {
            navigation.navigate(Screens.navinestWelcome.key, { id: inputKey });
            setBusy(false);
        } else if (typeof keyValidated == 'boolean' && loadStaus.success) {
            setBusy(false);
        }
    }, [keyValidated, loadStaus.success]);

    const authenticateAndProceed = async () => {
        setBusy(true);
        const result = await validateAppKey(String(inputKey));
        setShowKeyValidationError(!result.success);
        setKeyValidated(result.success);
        setBusy(false);
        if (result.success) {
            // Navigate to the key-in screen with the validated key
            router.replace(`/?id=${inputKey}`);
            navigation.replace(Screens.navinestWelcome.key, { id: inputKey });
        } else {
            // Handle invalid key case
            console.error(Strings.invalidPropertyKey);
        }
    };

    const handleKeyInputChange = (key: string) => {
        setInputKey(key);
        if (showKeyValidationError) {
            setShowKeyValidationError(false);
        }
    };

    const hasAuthFailed = () => {
        return typeof keyValidated == 'boolean' && !keyValidated;
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
                {hasAuthFailed() && (
                    <>
                        <div style={styles.keyInContianer}>
                            <ThemedTextInput
                                placeholder={Strings.enterPropertyKey}
                                value={inputKey}
                                onChangeText={handleKeyInputChange}
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
                        {showKeyValidationError && (
                            <ThemedText type='error' style={styles.errorText}>
                                {Strings.invalidPropertyKey}
                            </ThemedText>
                        )}
                    </>
                )}

                <ThemedActivityIndicator animating={busy} />
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>{Strings.poweredBy}</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
