import { Text, View, StyleSheet } from 'react-native';

export const PizzaItem = () => {

    let name = 'Pizza Quatro Queijos';
    let price = 50;
    let originalPrice = 60;

    return (
        <View style={styles.container}>
            <Text style={[ styles.name, styles.negrito ]}>{name}</Text>
            <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
            {originalPrice > price &&
                <Text>PROMOÇÃO EXTRA!</Text>
            }
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
