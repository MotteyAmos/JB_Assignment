import { StyleSheet, Text, View, ImageBackground, Alert, TouchableOpacity } from 'react-native'
import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '@/globalStore/app/hook'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { makeDeposite } from '@/globalStore/features/user/user';


const Deposite = () => {
    const [depositAmount, setDepositAmount] = useState('');

    const user = useAppSelector((state) => state.user)
    const dispatch = useAppDispatch();

    const handleDeposit = () => {


        dispatch(makeDeposite(depositAmount))
        setDepositAmount('');
    };


    return (
        <View style={{ padding: 16, flex: 1, backgroundColor: "white" }}>

            <View style={{ height: 150, width: "100%", elevation: 10, borderRadius: 10, shadowColor: "green" }}>
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
                <View style={{ opacity: 1, zIndex: 15, position: 'absolute', top: 5, width: "100%", paddingLeft: 5 }}>
                    <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
                        Current Balance</Text>
                    <Text style={{ fontSize: 24, fontWeight: "700", color: "white", marginLeft: 32 }}>
                        {user.balance}
                    </Text>
                </View>

                <View style={{
                    backgroundColor: "#6DF873",
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

                    }}>Hello {user.userName}, saving is great! Start growing your funds today</Text>
            </View>


            <View style={{ height: 64, marginBottom: 16 }}>
                <FloatingLabelInput
                    label={'Enter amount to deposite'}
                    value={depositAmount}
                    onChangeText={value => setDepositAmount(value)}
                    containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
                    inputStyles={{}}
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity
                style={{
                    height: 60,
                    backgroundColor: "#1F41BB",
                    width: "100%",
                    borderRadius: 10,
                    justifyContent: "center",
                    alignItems: "center",

                }}
                onPress={() => handleDeposit()}
            >
                <Text style={{ color: "white", fontSize: 20 }}>Deposite</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Deposite

const styles = StyleSheet.create({})