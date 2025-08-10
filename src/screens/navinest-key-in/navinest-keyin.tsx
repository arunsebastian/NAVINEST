import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";
import { styles } from "./styles";
;

export const  NavinestKeyIn = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <View style={styles.body}>
          <ThemedText darkColor="#000" type="title">Navinest Key In...</ThemedText>
        </View>
        <View style={styles.footer}></View>
    </View>
  );
}
