import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Card from '../../components/week3/Card';
import Hotel from '../../components/week3/Hotel';
import MyIcon from '../../components/week3/MyIcon';
import Signup from '../../components/week3/Signup';
import Menu from '../../components/week3/Menu';


export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop : 50  }}>
                <Text> Week 3 </Text>
                <Signup />
                <Card />
                <Hotel /> 
                <MyIcon title='หัวใจ' name='heart' size={30} color='orange'/>
                <MyIcon title='บ้าน' name='home' size={30} color='tomato'/>
                <Menu />
            </View>
        </ScrollView>
    );
}
