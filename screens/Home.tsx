import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ActionCard from '@/components/ActionCard'
import { useAppSelector, useAppDispatch } from '@/globalStore/app/hook'

const Home = () => {
    const user = useAppSelector((state) => state.user)

    return (
        <View style={{ flex: 1,paddingHorizontal:16 }}>
             
            <View style={{marginVertical:24}}>
                <Text style={{fontSize:18}}>Current Balance GHC <Text style={{fontWeight:"700"}}>{user.balance}</Text></Text>
            </View>
            <View style={{gap:16}}>
             
                    <ActionCard img={require("@/assets/images/deposite_img1.png")} title="Deposite" bgColor='#6DF873'  href="Deposite"/>
                    <ActionCard img={require("@/assets/images/makePayment.jpeg")} title="Make Payment" bgColor='#25E2FF' href="MakePayment"/>
            

                <ActionCard img={require("@/assets/images/withdrawer.jpeg")} title="Withdrawal" bgColor='#F07B97' href="WithDrawal"/>


            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})