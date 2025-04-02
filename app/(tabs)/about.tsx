import {Text, View, StyleSheet} from 'react-native';

export default function AboutScreen() {
    return (
        <View style = {estilo.container}> { /*Fragment (Fragmento)*/}
        <Text style = {estilo.text} sty>About Screen</Text>
        </View>
    )
}

// estilos
const estilo = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {

    }
});

