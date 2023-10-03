import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 5,

    },

    cards: {
        flex: 1,
        width: 40,
        height: 100,
    },

    inventario: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
      },

    row: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },

    escolha: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '15px',
        height: '25%'
      },
  });

export default styles;