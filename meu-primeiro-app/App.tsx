import { Text, View, StyleSheet } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

const App = () => {
  return (
    <View style={styles.container}>
        <Text>Meu Primeiro App</Text>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;