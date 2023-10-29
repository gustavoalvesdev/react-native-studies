import { Text, View, StyleSheet } from 'react-native';

type Props = {
    name: string;
    price: number;
    originalPrice?: number;
    items: string[];
}

export const PizzaItem = ({ 
    name, 
    price, 
    originalPrice, 
    items 
}: Props) => {
    
    return (
        <View style={styles.container}>
            <Text style={[ styles.name, styles.negrito ]}>{name}</Text>
            <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
            {originalPrice && originalPrice > price &&
                <Text>PROMOÇÃO EXTRA!</Text>
            }
            <Text>{items.join(', ')}</Text>
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
