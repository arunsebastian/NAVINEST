import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import {
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView,
    ThemedText,
    ThemedThumbnailView
} from '@/components/themed';

import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    gridView: {
        margin: 10,
        flex: 1,
        display: 'flex'
    },
    gridItemView: {
        marginTop: 0,
        marginBottom: 15,
        marginLeft: 15
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
        height: 50,
        userSelect: 'none'
    }
});

export const Home = () => {
    const { id, data } = useRoute().params as any;
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const [pageTriggers, setPageTriggers] = useState<
        Array<Record<string, any>>
    >([]);

    const navigateToDetails = (
        event: GestureResponderEvent,
        item: Record<string, any>
    ) => {
        navigation.navigate(item.title);
    };

    const renderHomeItem = ({ item }: Record<string, any>) => {
        return (
            item && (
                <Pressable
                    onPress={(event: GestureResponderEvent) =>
                        navigateToDetails(event, item)
                    }
                    onHoverIn={({ target }: any) => {
                        target.style.opacity = 0.6;
                    }}
                    onHoverOut={({ target }: any) => {
                        target.style.opacity = 1.0;
                    }}
                    style={({ pressed }) => [
                        {
                            opacity: pressed ? 0.6 : 1.0
                        }
                    ]}
                >
                    <ThemedThumbnailView
                        id={item.id}
                        style={styles.gridItemView}
                    >
                        <Image
                            source={require('@assets/images/parking.png')}
                            style={styles.imgBox}
                            resizeMode='cover'
                        />
                        <ThemedText style={styles.itemName}>
                            {item.title}
                        </ThemedText>
                    </ThemedThumbnailView>
                </Pressable>
            )
        );
    };

    useEffect(() => {
        if (data) {
            setPageTriggers([...data.pages]);
        }
    }, [data]);

    return (
        <ThemedScrollView header={<ThemedHeader />} footer={<ThemedFooter />}>
            <FlatGrid
                itemDimension={150}
                data={pageTriggers}
                style={styles.gridView}
                renderItem={renderHomeItem}
            />
        </ThemedScrollView>
    );
};
