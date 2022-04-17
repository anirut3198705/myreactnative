import React from 'react';
import { View} from 'react-native';
import  MyIcon  from './MyIcon';




export default function Section5() {
    return (
        <View style={{ borderWidth :2 , borderColor: 'black', borderRadius: 20 , margin : 10 , padding : 10 }}>

        
            <View style= {{ flexDirection: 'row', justifyContent : 'space-around', marginVertical : 10}}>
                <MyIcon title='wifi' name='wifi' size={20} color='black'/>
                <MyIcon title='coffee' name='coffee' size={20} color='tomato'/>
                <MyIcon title='bath' name='bath' size={20} color='orange'/>
                <MyIcon title='car' name='car' size={20} color='green'/>
                <MyIcon title='paw' name='paw' size={20} color='gray'/>

            </View>

        </View>    
    );
}
