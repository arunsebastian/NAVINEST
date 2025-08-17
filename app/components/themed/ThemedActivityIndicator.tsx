import { useThemeColor } from '@/hooks/useThemeColor';
import { ActivityIndicator, StyleSheet, type ActivityIndicatorProps } from 'react-native';

export type ThemedActivityIndicatorProps = ActivityIndicatorProps & {
    mode?: string;
    size?:number
};



const styles = StyleSheet.create({
    indicator:{
        position:'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
})

export const ThemedActivityIndicator= ({  style, mode='default',size=50, ...otherProps  }: ThemedActivityIndicatorProps) =>{
  const color = useThemeColor({context:'activityIndicator',mode:mode});
  return <ActivityIndicator size={size} color={ color} style={[styles.indicator,style]} {...otherProps} />;
}

