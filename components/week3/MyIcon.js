import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function MyIcon(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress }>
            <View style={{ width: props.size*1.6, height: props.size*1.6, borderRadius: props.size*1.6/2 , alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name={ props.name }  size={ props.size } color={ props.color } />  
            </View>
            <Text style={{ color: props.fontColor }}>{ props.title }</Text>
            </TouchableOpacity>
        </View>
    );
}
