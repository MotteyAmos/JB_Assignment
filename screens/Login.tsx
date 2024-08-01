import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useAppSelector, useAppDispatch } from '@/globalStore/app/hook'
import { setUserName as storeUser} from '@/globalStore/features/user/user';
import { router } from 'expo-router';

export default function Login({ navigation }) {
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [userName, setUserName] = useState<string>("");

    const dispatch = useAppDispatch()
    return (
        <View style={{
            flex: 1,
            // justifyContent: 'center',
            alignItems: "center",
            paddingHorizontal: 16,
            backgroundColor: "white"

        }}>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1F41BB", textAlign: "center" }}> Login Page</Text>
                <Text style={{ fontSize: 20, fontWeight: "semibold", width: 300, textAlign: 'center' }}>Welcome back you've been missed!</Text>
            </View>
            <View style={{ flex: 4, width: "100%", gap: 16 }}>
                <View style={{ height: 64 }}>
                    <FloatingLabelInput
                        label={'UserName'}
                        value={userName}
                        onChangeText={value => setUserName(value)}

                        containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
                        inputStyles={{}}
                    />
                </View>
                <View style={{ height: 64 }}>
                    <FloatingLabelInput
                        label={'Password'}
                        isPassword
                        togglePassword={showPassword}
                        value={password}
                        onChangeText={value => setPassword(value)}
                        customShowPasswordComponent={<Text>Show</Text>}
                        customHidePasswordComponent={<Text>Hide</Text>}
                        containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
                        inputStyles={{}}
                    />
                </View>
                <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 14, color: "#1F41BB" }}>Forgot your password</Text>
                </View>
                <View style={{ width: "100%" }}>
                    <TouchableOpacity
                        style={{
                            height: 60,
                            backgroundColor: "#1F41BB",
                            width: "100%",
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",

                        }}
                        onPress={() =>[ navigation.navigate('Registration'), dispatch(storeUser(userName))]}
                    >
                        <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )

}
