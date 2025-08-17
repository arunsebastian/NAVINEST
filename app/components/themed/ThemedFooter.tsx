
import { StyleSheet, View, type ViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedFooterProps = ViewProps & {
    mode?: string;
};

const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        width:'100%'
    }
})

export const ThemedFooter = ({ style, mode='default', ...otherProps }: ThemedFooterProps) =>{
  const backgroundColor = useThemeColor({context:'toolbarBackGround',mode:mode});

  return <View style={[{ backgroundColor }, styles.footer, style]} {...otherProps} />
}




