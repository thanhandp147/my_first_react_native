import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';
import FB from '../assets/facebook.png'

export default function Category(props) {

    const {data_send_to_props}=props
    return (
        <View style={styles.container}>
        
            <Text style={styles.title}>{data_send_to_props.title}</Text>
            <Image style={styles.categoryImage} source={FB} />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryImage: {
        width: 50,
        height: 50
    },
    container:{
        alignItems: "center",
        padding:16,
        borderRadius: 4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity: 0.3,
        shadowRadius:10,
        shadowOffset: {width: 0, height: 0},
        marginBottom: 16
    },
    title:{
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
    }
})