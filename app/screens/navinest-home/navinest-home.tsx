import {
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView
} from '@/components/themed';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homeItem: {
        gap: 8,
        border: '1px solid red',
        margin: 10
    }
});

export const NavinestHome = () => {
    return (
        <ThemedScrollView header={<ThemedHeader />} footer={<ThemedFooter />}>
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
