import React from 'react';
import { View, Text, Button } from 'react-native';



export default function Section8() {
    return (
        <View style={{ flexDirection : 'row', justifyContent: 'space-between' , marginTop: 20 }}>
            <View style={{ flexDirection: 'column'}}>
                <Text>Price</Text>
                <Text style={{color: 'green'}}>$399.99</Text>
                <Text>AVG/Night</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
                <Button title='Book Now' color='red'/>

            </View>
            </View>

        
    );
}
