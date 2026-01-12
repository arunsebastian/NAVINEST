import {
    ThemedFooter,
    ThemedHeader,
    ThemedView,
    ThemedText,
    ThemedScrollView
} from '@/components/themed';
import { StyleSheet ,View} from 'react-native';
import { FlexGrid } from 'react-native-flexible-grid';
// import { FlatGrid, SectionGrid } from 'react-native-super-grid';

const styles = StyleSheet.create({
    homeItem: {
        gap: 8,
        border: '1px solid red',
        margin: '10 0 10 0',
    } as any
});

export const NavinestHome = () => {
    return (
        <ThemedScrollView  header={<ThemedHeader />} footer={<ThemedFooter />}>
             <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            {/*
            // i am here create a GRID layout for the home items and pass the following content as children
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView> */}
        </ThemedScrollView>
    );
};
