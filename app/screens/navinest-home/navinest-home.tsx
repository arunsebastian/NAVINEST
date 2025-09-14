import { ThemedHeader, ThemedView } from '@/components/themed';

export const NavinestHome = () => {
    return (
        <ThemedView>
            <ThemedHeader />
            <ThemedView>Hello World</ThemedView>
        </ThemedView>
        // <Stack.Navigator>
        //I AM HERE - all the expo routing stuff should happen here - whether tabs or stacks or drawers or slots
        // </Stack.Navigator>
    );
};
