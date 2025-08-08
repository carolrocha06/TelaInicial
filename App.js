import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Casual from './assets/Casual_dog.png';
import Google from './assets/Google.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={Casual}
        style={{height: 300, width: 368}}
      />

      <Text style={styles.titulo}>Ótimo dia!</Text>
      <Text style={styles.subtitulo}>Como deseja acessar? </Text>

      <TouchableOpacity
        style={{height: 70, width: 300, backgroundColor: '#2cb859', padding: 9, borderColor: "white", borderWidth: 2, borderRadius: 5, marginTop: 45, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 35}} >

        <Image
          source={Google}
          style={{height: 40, width: 40}}
        />
        <Text style={styles.mensagem}>Como deseja acessar? </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{width: 300, backgroundColor: 'white', borderColor: '#2cb859', borderWidth: 2, borderRadius: 5, justifyContent: 'center', flexDirection: 'row', marginTop: 12}} >

        <Text style={styles.escrita}>Outras opções </Text>
      </TouchableOpacity>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    margin: 3,
    fontWeight: 'bold',
    marginTop: 50,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mensagem: {
    color: 'white',
  },
  escrita: { 
    padding: 20,
    fontWeight: 'bold',
  }


});
