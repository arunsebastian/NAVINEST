// import { ThemedHeader, ThemedView } from '@/components/themed';

// export const NavinestHome = () => {
//     return (
//         <ThemedView>
//             <ThemedHeader />
//             <ThemedView>Hello World</ThemedView>
//         </ThemedView>
//         // <Stack.Navigator>
//         //I AM HERE - all the expo routing stuff should happen here - whether tabs or stacks or drawers or slots
//         // </Stack.Navigator>
//     );
// };

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
// import React, { useEffect, useRef, useState } from 'react';

// import { Image, StyleSheet, View } from 'react-native';
// import { ResponsiveGrid } from 'react-native-flexible-grid';

// export const NavinestHome = () => {
//     let idCounter = useRef(0);
//     const [data, setData] = useState<DataProp[]>([]);

//     interface DataProp {
//         id: number;
//         widthRatio?: number;
//         heightRatio?: number;
//         imageUrl: string;
//     }

//     const generateData = () => {
//         const originalData = [
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=1'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=2'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=3'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=4'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=5'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=6'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=7'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=8'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=9'
//             },
//             {
//                 imageUrl: 'https://picsum.photos/200/300?random=10'
//             }
//         ];

//         let clonedData: DataProp[] = [];

//         for (let i = 0; i < 5; i++) {
//             const newData = originalData.map((item) => ({
//                 ...item,
//                 id: ++idCounter.current
//             }));
//             clonedData = [...clonedData, ...newData];
//         }

//         return clonedData;
//     };

//     const renderItem = ({ item }: { item: DataProp }) => {
//         return (
//             <View style={styles.boxContainer}>
//                 <Image
//                     source={{ uri: item.imageUrl }}
//                     style={styles.box}
//                     resizeMode='cover'
//                 />
//             </View>
//         );
//     };

//     useEffect(() => {
//         setData(generateData());
//     }, []);

//     return (
//         <View
//             style={{
//                 flex: 1
//             }}
//         >
//             <ResponsiveGrid
//                 maxItemsPerColumn={4}
//                 data={data}
//                 renderItem={renderItem}
//                 showScrollIndicator={false}
//                 style={{
//                     padding: 5
//                 }}
//                 keyExtractor={(item: DataProp) => item.id.toString()}
//             />

//             <View
//                 style={{
//                     position: 'absolute',
//                     width: '100%',
//                     bottom: 0
//                 }}
//             >
//                 {/* <BottomNav /> */}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     boxContainer: {
//         flex: 1,
//         margin: 1
//     },
//     image: {
//         width: 100,
//         height: 100
//     },
//     box: {
//         width: '100%',
//         height: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'transparent'
//     },
//     text: {
//         color: 'white',
//         fontSize: 10,
//         position: 'absolute',
//         bottom: 10
//     }
// });

import { StyleSheet } from 'react-native';

// import { Collapsible } from '@/tbd/Collapsible';
// import { ExternalLink } from '@/tbd/ExternalLink';

import { ThemedParallaxScrollView } from '@/components/themed';
import { ThemedText } from '@/components/themed/ThemedText';
import { ThemedView } from '@/components/themed/ThemedView';

export const NavinestHome = () => {
    return (
        <ThemedParallaxScrollView
        // headerImage={
        //     <IconSymbol
        //         size={310}
        //         color='#808080'
        //         name='chevron.left.forwardslash.chevron.right'
        //         style={styles.headerImage}
        //     />
        // }
        >
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Explore</ThemedText>
            </ThemedView>
            <ThemedText>
                This app includes example code to help you get started.
            </ThemedText>
            {/* <Collapsible title='File-based routing'>
                <ThemedText>
                    This app has two screens:{' '}
                    <ThemedText type='defaultSemiBold'>
                        app/(tabs)/index.tsx
                    </ThemedText>{' '}
                    and{' '}
                    <ThemedText type='defaultSemiBold'>
                        app/(tabs)/explore.tsx
                    </ThemedText>
                </ThemedText>
                <ThemedText>
                    The layout file in{' '}
                    <ThemedText type='defaultSemiBold'>
                        app/(tabs)/_layout.tsx
                    </ThemedText>{' '}
                    sets up the tab navigator.
                </ThemedText>
                <ExternalLink href='https://docs.expo.dev/router/introduction'>
                    <ThemedText type='link'>Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title='Android, iOS, and web support'>
                <ThemedText>
                    You can open this project on Android, iOS, and the web. To
                    open the web version, press{' '}
                    <ThemedText type='defaultSemiBold'>w</ThemedText> in the
                    terminal running this project.
                </ThemedText>
            </Collapsible>
            <Collapsible title='Images'>
                <ThemedText>
                    For static images, you can use the{' '}
                    <ThemedText type='defaultSemiBold'>@2x</ThemedText> and{' '}
                    <ThemedText type='defaultSemiBold'>@3x</ThemedText> suffixes
                    to provide files for different screen densities
                </ThemedText>
                <Image
                    source={require('@assets/images/x.png')}
                    style={{ alignSelf: 'center' }}
                />
                <ExternalLink href='https://reactnative.dev/docs/images'>
                    <ThemedText type='link'>Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title='Custom fonts'>
                <ThemedText>
                    Open{' '}
                    <ThemedText type='defaultSemiBold'>
                        app/_layout.tsx
                    </ThemedText>{' '}
                    to see how to load{' '}
                    <ThemedText style={{ fontFamily: 'SpaceMono' }}>
                        custom fonts such as this one.
                    </ThemedText>
                </ThemedText>
                <ExternalLink href='https://docs.expo.dev/versions/latest/sdk/font'>
                    <ThemedText type='link'>Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title='Light and dark mode components'>
                <ThemedText>
                    This template has light and dark mode support. The{' '}
                    <ThemedText type='defaultSemiBold'>
                        useColorScheme()
                    </ThemedText>{' '}
                    hook lets you inspect what the user&apos;s current color
                    scheme is, and so you can adjust UI colors accordingly.
                </ThemedText>
                <ExternalLink href='https://docs.expo.dev/develop/user-interface/color-themes/'>
                    <ThemedText type='link'>Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title='Animations'>
                <ThemedText>
                    This template includes an example of an animated component.
                    The{' '}
                    <ThemedText type='defaultSemiBold'>
                        components/HelloWave.tsx
                    </ThemedText>{' '}
                    component uses the powerful{' '}
                    <ThemedText type='defaultSemiBold'>
                        react-native-reanimated
                    </ThemedText>{' '}
                    library to create a waving hand animation.
                </ThemedText>
                {Platform.select({
                    ios: (
                        <ThemedText>
                            The{' '}
                            <ThemedText type='defaultSemiBold'>
                                components/ParallaxScrollView.tsx
                            </ThemedText>{' '}
                            component provides a parallax effect for the header
                            image.
                        </ThemedText>
                    )
                })}
            </Collapsible> */}
        </ThemedParallaxScrollView>
    );
};

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute'
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8
    }
});
