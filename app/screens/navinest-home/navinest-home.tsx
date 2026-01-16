import { useRoute } from '@react-navigation/native';
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

export const NavinestHome = () => {
    const { id, data } = useRoute().params as any;
    const [homePages, setHomePages] = useState<Array<Record<string, any>>>([]);

    const navigateToDetails = (event: GestureResponderEvent) => {
        console.log('Navigate to details of the clicked item');
    };

    const renderHomeItem = ({ item }: Record<string, any>) => {
        return (
            item && (
                <Pressable
                    onPress={navigateToDetails}
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
                    <ThemedThumbnailView id={item.id}>
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
            setHomePages([...data.pages]);
        }
    }, [data]);

    return (
        <ThemedScrollView header={<ThemedHeader />} footer={<ThemedFooter />}>
            <FlatGrid
                itemDimension={150}
                data={homePages}
                style={styles.gridView}
                renderItem={renderHomeItem}
            />
        </ThemedScrollView>
    );
};
