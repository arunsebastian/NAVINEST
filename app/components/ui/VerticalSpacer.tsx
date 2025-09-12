import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    vspacer: {
        height: 10,
        width: '100%'
    }
});

export const VerticalSpacer = ({ style, ...otherProps }: any) => {
    return <div style={{ ...styles.vspacer, ...style }} {...otherProps} />;
};
