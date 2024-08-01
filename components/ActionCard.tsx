import { View, Text, ImageBackground, Pressable } from 'react-native'
import type { ImageSourcePropType } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

export default function ActionCard({ img, title , bgColor, href}: { img: string, title: string, bgColor:string,href:never }) {
    const navigation = useNavigation();
    return (
        <View style={{ height: 100, width: "100%",elevation:10, borderRadius:10}}>
            <Pressable style={{ flex: 1, position: "relative", borderRadius: 10 }} onPress={() => { navigation.navigate(href)}}>

                <ImageBackground
                    source={img as ImageSourcePropType}
                    // contentFit="cover"
                    // transition={100}
                    resizeMode="cover"
                    style={{
                        flex: 1,
                        alignItems: "center",
                        borderWidth: 1,
                        borderColor: "#BAE6FD",
                        borderRadius: 10
                    }}
                />

                <Text style={{  color: "white", fontSize: 16, fontWeight: "700", opacity: 1, zIndex: 15, position: 'absolute', top:5, width: "100%" , paddingLeft:5}}>{title}</Text>
               <View style={{
                     backgroundColor:bgColor,
                     justifyContent: 'center',
                     overflow: 'hidden',
                     borderRadius: 10,
                     position: "absolute",
                     top:0,
                     left:0,
                     zIndex:5,
                     width:"100%",
                     height:100,
                     opacity:0.4
               }}></View>
                {/* <BlurView intensity={90} tint="light" style={{
                     
                     justifyContent: 'center',
                     overflow: 'hidden',
                     borderRadius: 10,
                     position: "absolute",
                     top:0,
                     left:0,
                     zIndex:5,
                     width:"100%",
                     height:100,
                }}>
                    
                </BlurView> */}

            </Pressable>
        </View>
    )
}