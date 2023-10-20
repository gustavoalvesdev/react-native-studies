import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

const App = () => {
  return (
    <SafeAreaView>
        <Text style={styles.title}>Meu Primeiro App</Text>
        <Text style={styles.subtitle}>Lista de Pizzas:</Text>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
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