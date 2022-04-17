import React from 'react';
import { View, Image } from 'react-native';


export default function Section1() {
    return (
        <View style={{  }}>

            <View style={{ flexDirection: "column"}}>
                <Image style={{width: 450 , height: 150}}   source={require('../../assets/week3/room-6.jpg')} />
                        
            </View>

        </View>
    );
}
