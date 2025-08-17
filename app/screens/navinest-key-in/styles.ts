import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:'#EFF7FF',
        flex:1
    },
    body:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        flexDirection: 'row', // Arranges children horizontally
        justifyContent: 'space-around', // Distributes items evenly
        alignItems: 'center', // Centers items vertically
        paddingVertical: 10,
        height:50,
        backgroundColor:'#D1E8FD'
    },
    footer:{
        flexDirection: 'row', // Arranges children horizontally
        justifyContent: 'space-around', // Distributes items evenly
        alignItems: 'center', // Centers items vertically
        backgroundColor:'#D1E8FD',
        paddingVertical: 10,
        height:50
    },
    logo:{
        marginTop:20
    }
})