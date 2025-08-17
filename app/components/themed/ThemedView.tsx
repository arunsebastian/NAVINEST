import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
    mode?: string;
};




const styles = StyleSheet.create({
    view:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    }
})

export const ThemedView = ({  style, mode='default', ...otherProps  }: ThemedViewProps) =>{
  const backgroundColor = useThemeColor({context:'appBackground'});

  return <View style={[{ backgroundColor },styles.view, style]} {...otherProps} />;
}

