import { useThemeColor } from '@/hooks/useThemeColor';
import { ActivityIndicator, StyleSheet, type ActivityIndicatorProps } from 'react-native';

export type ThemedActivityIndicatorProps = ActivityIndicatorProps & {
    mode?: string;
};



const styles = StyleSheet.create({
    indicator:{}
})

export const ThemedActivityIndicator= ({  style, mode='default', ...otherProps  }: ThemedActivityIndicatorProps) =>{
  const color = useThemeColor({context:'activityIndicator',mode:mode});
  return <ActivityIndicator color={ color} style={[styles.indicator,style]} {...otherProps} />;
}

