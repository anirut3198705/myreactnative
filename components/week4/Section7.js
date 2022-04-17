import React from 'react';
import { View, Text,Image } from 'react-native';




export default function Section7() {
    return (

        <View style={{ flex: 1 , marginTop: 10 }}>
            <View >
                <Text>Room Type</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignContent: 'center', marginTop: 5}}>
            
            <View>
                <Image style={{width: 100, height: 100, borderRadius : 20/2}}   source={require('../../assets/week3/room-8.jpg')} />
                        
            </View>


            <View style={{ flexDirection: 'column', justifyContent: 'flex-start' , alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 20, color: 'green' }}>Standard Twin Room</Text>
                <Text style={{ color: 'oreng', marginTop: 20 }}>$399.99</Text>
                <Text style={{ fontSize: 10 ,  }}>Hurry Up! This is your last room!
</Text>
            </View>

            </View>
        </View>
    );
}