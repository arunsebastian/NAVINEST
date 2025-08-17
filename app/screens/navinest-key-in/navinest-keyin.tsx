import {
    ThemedFooter,
    ThemedHeader,
    ThemedText,
    ThemedView
} from '@/components/themed';

export const NavinestKeyIn = () => {
    console.log('Navinest Key In Screen Loaded');
    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>
                <ThemedText type='title'>Navinest Key In</ThemedText>
            </ThemedView>
            <ThemedFooter>
                <ThemedText type='subtitle'>Powered By Navinest</ThemedText>
            </ThemedFooter>
        </ThemedView>
    );
};
