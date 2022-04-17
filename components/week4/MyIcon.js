import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function MyIcon(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name={ props.name }  size={ props.size } color={ props.color } />  
            </View>
            <Text style={{ color: props.fontColor }}>{ props.title }</Text>
        </View>
    );
}
