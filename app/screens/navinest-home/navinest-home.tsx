import { useThemeColor } from '@/hooks/useThemeColor';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import {
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView,
    ThemedText
} from '@/components/themed';

import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        display: 'flex'
    },
    itemContainer: {
        padding: 10,
        height: 150,
        borderRadius: 8,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10
    },
    itemName: {
        fontSize: 16,
        fontWeight: '600',
        userSelect: 'none',
        textAlign: 'center'
    },
    imgBox: {
        marginTop: 10,
        width: 50,
        height: 50
    }
});

export const NavinestHome = () => {
    const { id, data } = useRoute().params as any;
    const [homePages, setHomePages] = useState<Array<Record<string, any>>>([]);
    const backgroundColorDefault = useThemeColor({
        context: 'toolbarBackGround',
        mode: 'default'
    });

    const navigateToDetails = (event: GestureResponderEvent) => {
        console.log('Navigate to details of the clicked item');
    };

    const renderHomeItem = ({ item }: Record<string, any>) => {
        return (
            item && (
                <Pressable
                    onPress={navigateToDetails}
                    onHoverIn={({ target }: any) => {
                        target.style.opacity = 0.8;
                    }}
                    onHoverOut={({ target }: any) => {
                        target.style.opacity = 1.0;
                    }}
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.8 : 1.0
                        }
                    ]}
                >
                    <View
                        id={item.id}
                        style={[
                            styles.itemContainer,
                            { backgroundColor: backgroundColorDefault }
                        ]}
                    >
                        <Image
                            source={require('@assets/images/parking.png')}
                            style={styles.imgBox}
                            resizeMode='cover'
                        />
                        <ThemedText style={styles.itemName}>
                            {item.title}
                        </ThemedText>
                    </View>
                </Pressable>
            )
        );
    };

    useEffect(() => {
        if (data) {
            setHomePages([...data.pages]);
        }
    }, [data]);

    return (
        <ThemedScrollView header={<ThemedHeader />} footer={<ThemedFooter />}>
            <FlatGrid
                itemDimension={130}
                data={homePages}
                style={styles.gridView}
                spacing={50}
                renderItem={renderHomeItem}
            />
        </ThemedScrollView>
    );
};
