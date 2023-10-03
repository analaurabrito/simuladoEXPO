import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function MainPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Selecione seu item:</Text>
      <View style={styles.inventario}>
        <View style={styles.row}>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.escolha}>
            <Image style={styles.cards} source={require('../../../assets/item1.jpg')} />
            <TouchableOpacity style={styles.select}>
              <Text>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
