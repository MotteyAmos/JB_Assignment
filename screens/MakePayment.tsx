import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/globalStore/app/hook'

const MakePayment = () => {
    const user = useAppSelector((state) => state.user)

    return (
        <View style={{ marginTop: 16, paddingHorizontal: 16 }}>
            <View style={{ height: 150, width: "100%", elevation: 10, borderRadius: 10, shadowColor: "blue" }}>


                <ImageBackground
                    source={require("@/assets/images/deposite_img1.png")}
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

                <Text style={{ color: "white", fontSize: 16, fontWeight: "700", opacity: 1, zIndex: 15, position: 'absolute', top: 5, width: "100%", paddingLeft: 5 }}>Make Payment</Text>
                <View style={{
                    backgroundColor: "#25E2FF",
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: 10,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 5,
                    width: "100%",
                    height: 150,
                    opacity: 0.4
                }}>

                </View>

                

            </View>
            <View style={{ marginVertical: 24 }}>
                    <Text style=
                        {{
                            fontSize: 18,
                            fontWeight: "semibold"

                        }}>Hello {user.userName}, making payments is easy! Get started now.</Text>
                </View>
        </View>
    )
}

export default MakePayment