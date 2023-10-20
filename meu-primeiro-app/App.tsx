import { Text, View } from 'react-native';
import { PizzaItem } from './components/PizzaItem';

const App = () => {
  return (
    <View>
        <Text>Meu Primeiro App</Text>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
    </View>
  );
}

export default App;