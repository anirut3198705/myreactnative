import React from 'react';
import { View, Image, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'


export default function Section2() {
    return (
        <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10, margin: 20, padding: 20, marginTop: -20 , backgroundColor: 'white'}}>

            <View style={{ flexDirection: 'row' , justifyContent:  'center' }}>
                <Text style={{ color: 'black', fontSize: 20, paddingTop: 10, paddingLeft: 5 }}>Hilton San Francisco</Text>
            </View>

            <View>
                <View style={{ flexDirection: 'row' , justifyContent:  'center' }}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>

                <View style={{ flexDirection: 'row' , justifyContent:  'center' }}>
                    <Text style={{ color: 'black', fontSize: 10, paddingTop: 10, paddingLeft: 5 }}>Facilities provided may range from a modest quality mattress in a small room to large suites
                    </Text>
                </View>


            </View>

        </View>
    );
}
