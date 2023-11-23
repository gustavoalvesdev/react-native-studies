import { useState } from 'react';
import { Button, Text, SafeAreaView, StyleSheet  } from 'react-native';


const App = () => {

  const [name, setName] = useState('Ninguém');

  const handleButton1 = () => {
    setName('Bonieky');
  }

  const handleButton2 = () => {
    setName('Gustavo');
  }

  return (
    <SafeAreaView>
        <Text style={styles.title}>Meu Primeiro App</Text>

        <Text style={styles.subtitle}>Meu nome é {name}</Text>

        <Button 
          title='Mudar para Bonieky' 
          onPress={handleButton1} 
        />
        <Button 
          title='Mudar para Gustavo' 
          onPress={handleButton2}
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
    fontSize: 19,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20
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