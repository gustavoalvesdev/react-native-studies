import { Text, SafeAreaView, StyleSheet, Button, Alert, Pressable, View } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

const App = () => {

  const handlePressIn = () => {
    Alert.alert('Começou o PRESS');
  }

  const handlePressOut = () => {
    Alert.alert('Tirou o dedo!');
  }

  const handleLongPress = () => { 
    Alert.alert('Segurou o dedo');
  }
  
  return (
    <SafeAreaView>
        <Text style={styles.title}>Meu Primeiro App</Text>

        <Text style={styles.subtitle}>Lista de Pizzas:</Text>

        <Pressable
          onPressOut={handlePressOut}
        >
          <PizzaItem 
            name="Quadro Queijos" 
            price={50} 
            items={['Queijo X', 'Queijo Y', 'Massa', 'Corante Amarelado']}
          />
        </Pressable>
        <PizzaItem 
          name="Calabresa" 
          price={45} 
          items={['Carne', 'Resto de algo', 'Massa', 'Corante Avermelhado']}
        />
        <PizzaItem 
          name="Frango" 
          price={30} 
          originalPrice={35} 
          items={['Galeto', 'Hormônio XYZ', 'Corante Laranja']}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 25,
    fontSize: 24,
    color: '#FF0000',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 17,
    color: '#999',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 10,
    margin: 10
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',

  }
});

export default App;