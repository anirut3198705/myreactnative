import React from 'react';
import { View, Image, Text } from 'react-native';



export default function Section6() {
    return (
        <View style={{}}>

            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                <Text style={{ color: 'black', fontSize: 18, paddingTop: 10, paddingLeft: 5 }}>Location</Text>
            </View>


                <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontSize: 13, paddingTop: 10, paddingLeft: 5 }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…

</Text>
            </View>
            <View style={{ flexDirection: "column"}}>
                <Image style={{width: 450 , height: 130}}   source={require('../../assets/week3/map.jpg')} />
                        
            </View>


            </View>

        
    );
}
