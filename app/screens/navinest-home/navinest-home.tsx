import {
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView
} from '@/components/themed';
import { useState } from 'react';
import {
    GestureResponderEvent,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
        display: 'flex'
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 10,
        padding: 10,
        height: 150,
        cursor: 'pointer'
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600'
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff'
    }
});

export const NavinestHome = () => {
    const [items, setItems] = useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
        { name: 'AMETHYST', code: '#9b59b6' },
        { name: 'WET ASPHALT', code: '#34495e' },
        { name: 'GREEN SEA', code: '#16a085' },
        { name: 'NEPHRITIS', code: '#27ae60' },
        { name: 'BELIZE HOLE', code: '#2980b9' },
        { name: 'WISTERIA', code: '#8e44ad' },
        { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
        { name: 'SUN FLOWER', code: '#f1c40f' },
        { name: 'CARROT', code: '#e67e22' },
        { name: 'ALIZARIN', code: '#e74c3c' },
        { name: 'CLOUDS', code: '#ecf0f1' },
        { name: 'CONCRETE', code: '#95a5a6' },
        { name: 'ORANGE', code: '#f39c12' },
        { name: 'PUMPKIN', code: '#d35400' },
        { name: 'POMEGRANATE', code: '#c0392b' },
        { name: 'SILVER', code: '#bdc3c7' },
        { name: 'ASBESTOS', code: '#7f8c8d' }
    ]);

    const navigateToDetails = (event: GestureResponderEvent) => {
        console.log('Navigate to details of the clicked item');
    };

    const renderHomeItem = ({ item }: any) => {
        return (
            <Pressable
                onPress={navigateToDetails}
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
            >
                <View
                    style={[
                        styles.itemContainer,
                        { backgroundColor: item.code }
                    ]}
                >
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text>
                </View>
                {/* <View style={styles.boxContainer}>
                    <Image
                        source={{ uri: item.imageUrl }}
                        style={styles.box}
                        resizeMode='cover'
                    />
                </View> */}
            </Pressable>
        );
    };
    return (
        <ThemedScrollView header={<ThemedHeader />} footer={<ThemedFooter />}>
            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                spacing={50}
                renderItem={renderHomeItem}
            />
        </ThemedScrollView>
    );
};
