import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import aterissagem from './assets/aterrissagem.png';
import design from './assets/design-toxico.png';
import raposa from './assets/raposa.png';

export default function App() {
  return (
   <ScrollView>
    <View style={styles.total}>
      <Text style={styles.titulo}>Top Fotografias</Text>
      <Text style={styles.texto}>Candidatos a prêmio de fotográfia da vida selvagem em 2021</Text>
    </View>
    <ImageBackground style={styles.imagem} source={raposa}>
      <View style={styles.box}>
        <Text style={styles.titulointerno}>Raposa da tempestade</Text>
        <Text style={styles.textointerno}>Jonny Amstrong</Text>
      </View>
    </ImageBackground>
    <ImageBackground style={styles.imagem} source={design}>
      <View style={styles.box}>
        <Text style={styles.titulointerno}>Design tóxico</Text>
        <Text style={styles.textointerno}>Gheorge Popa</Text>
      </View>
    </ImageBackground>
    <ImageBackground style={styles.imagem} source={aterissagem}>
      <View style={styles.box}>
        <Text style={styles.titulointerno}>Aterissagem de apolo</Text>
        <Text style={styles.textointerno}>Ermelin Dupiex</Text>
      </View>
    </ImageBackground>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  total: {
    margin: 10,
    top: 70,
  },
  titulo:{
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  texto:{
    textAlign: 'center',
  },
  imagem:{
    top: 70,
    width: 250,
    height: 150,
    margin: 8,
    alignSelf: 'center',
  },
  titulointerno:{
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textointerno: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
  }
  
});