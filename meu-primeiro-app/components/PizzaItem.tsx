import { Text, View, StyleSheet } from 'react-native';

export const PizzaItem = () => {
    return (
        <View style={styles.container}>
            <Text style={[ styles.name, styles.negrito ]}>Pizza Calabresa</Text>
            <Text style={styles.price}>R$ 50,00</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#CCC',
        marginTop: 20,
    },
    name: {
        fontSize: 15,
        color: '#333',
        textAlign: 'center'
    },
    price: {
        fontSize: 13,
        color: '#00F',
        textAlign: 'center'
    },
    negrito: {
        fontWeight: 'bold'
    }
});
