import { View, StyleSheet } from 'react-native';
import { Stack, Link } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title: "Not Found "}} />
            <View style ={estilo.container}>
            <Link href="/about" style={estilo.button}>Volte para a página inicial</Link>
            </View>
        </>
    );
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
  });