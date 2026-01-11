import {
    ThemedFooter,
    ThemedHeader,
    ThemedScrollView,
    ThemedText,
    ThemedView
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
            </ThemedView>{' '}
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>{' '}
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>{' '}
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>{' '}
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>{' '}
            <ThemedView style={styles.homeItem}>
                <ThemedText type='title'>Explore</ThemedText>
                <ThemedText>
                    This app includes example code to help you get started.
                </ThemedText>
            </ThemedView>
        </ThemedScrollView>
    );
};
