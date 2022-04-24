import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Image, FlatList } from "react-native";

export default function Event(props) {
   

    const [onlineEvent, setOnlineEvent] = useState([]);
    const loadOnlineEvent = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineEvent(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineEvent();
    }, []);

    return (
        <View style={props.style}>
            <FlatList
                horizontal={true}
                data={onlineEvent}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 250, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ backgroundColor: 'black', width: 250, height: 50, opacity: 0.5, padding: 10, marginTop: -50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                </View>
                                <View style={{ borderBottomLeftRadius: 5, borderBottomRightRadius: 5, borderWidth: 5, borderColor: 'green' }}>
                                    <View style={{ padding: 5, flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 17, color: 'red', textAlign: 'left' }} >{item.month}</Text>
                                        <Text style={{ fontSize: 12, color: 'black', textAlign: 'right' }}> {item.title}</Text>
                                    </View>
                                    <View style={{ padding: 5 }}>
                                        <Text style={{ fontSize: 15, color: 'black' }}>{item.date}</Text>
                                        <Text style={{ color: 'grey' }}>{item.datetime}</Text>
                                        <Text style={{ color: 'grey' }}>{item.place}</Text>
                                    </View>
                                </View>
                            </View>

                        );
                    }
                }
                keyExtractor={item => item.id}
            />

        </View>
    );
}