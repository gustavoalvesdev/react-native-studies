import { Text, SafeAreaView, StyleSheet, Button, Alert } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

const App = () => {

  const handleButton = () => {
    Alert.alert('Apertou no botão!');
  }

  return (
    <SafeAreaView>
        <Text style={styles.title}>Meu Primeiro App</Text>

        <Button 
          title="Aperte aqui" 
          onPress={handleButton}  
          color='#FF0000'
        />

        <Text style={styles.subtitle}>Lista de Pizzas:</Text>
        <PizzaItem 
          name="Quadro Queijos" 
          price={50} 
          items={['Queijo X', 'Queijo Y', 'Massa', 'Corante Amarelado']}
        />
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
  }
});

export default App;