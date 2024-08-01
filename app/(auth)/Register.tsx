import React, { useState, useEffect } from 'react'
import { Text, View, TouchableOpacity, Animated, Pressable } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { router } from 'expo-router';
import AntDesign from "@expo/vector-icons/AntDesign"
const Registratin = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [accountBalance, setAccountBalance] = useState<number>(0);
  const [financialDetail, setFinancialDetail] = useState<string>("")

  // const [isPersonalDetails, setIsPersonalDetails] = useState(new Animated.Value(0));
  const [isPersonalDetails, setIsPersonalDetails] = useState<boolean>(true);


  // function personalDetailShow() {
  //   Animated.timing(isPersonalDetails, {
  //     toValue: 1,
  //     duration: 10000,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // function financialDetailShow() {
  //   Animated.timing(isPersonalDetails, {
  //     toValue: 1,
  //     duration: 10000,
  //     useNativeDriver: true,
  //   }).start();
  // }


  return (
    <View style={{
      flex: 1,
      // justifyContent: 'center',
      alignItems: "center",
      paddingHorizontal: 16,
      backgroundColor: "white",
      gap: 16
    }}>

      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1F41BB", textAlign: "center" }}> Create Account</Text>
        <Text style={{ fontSize: 20, fontWeight: "semibold", width: 350, textAlign: 'center' }}>Create an account to unlock all our banking services and features!</Text>
      </View>


      <View style={{ width: "100%", backgroundColor: "#fafafa", padding: 10, borderWidth: 1, borderColor: "#F1F4FF", borderRadius: 5, elevation: 1 }}>
        <View style={{ width: "100%", justifyContent: "flex-end", alignItems: "flex-end", marginVertical: 15, marginRight: 8 }}>
        <Pressable onPress={()=>{setIsPersonalDetails(!isPersonalDetails)}}>
            <AntDesign name="plus" size={18} color="#083344" style={{ display: isPersonalDetails ? "none" : "flex"}} />
            <AntDesign name="minus" size={18} color="#083344" style={{ display: isPersonalDetails ? "flex" : "none" }} />
          </Pressable>
        </View>

        {/* personal details section */}
        <View style={{ width: "100%", gap: 16, display: isPersonalDetails ? "flex" : "none" }}>

          <View style={{ height: 64 }}>
            <FloatingLabelInput
              label={'First Name'}
              value={firstName}
              onChangeText={value => setFirstName(value)}

              containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
              inputStyles={{}}
            />
          </View>

          <View style={{ height: 64 }}>
            <FloatingLabelInput
              label={'Last Name'}
              value={lastName}
              onChangeText={value => setLastName(value)}

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

          <View style={{ height: 64 }}>
            <FloatingLabelInput
              label={'Account Balance'}
              value={accountBalance.toString()}
              onChangeText={value => setAccountBalance(Number(value))}
              containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
              inputStyles={{}}
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>

      <View style={{ width: "100%", backgroundColor: "#fafafa", padding: 10, borderWidth: 1, borderColor: "#F1F4FF", borderRadius: 5, elevation: 1 }}>
        <View style={{ width: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Pressable onPress={()=>{setIsPersonalDetails(!isPersonalDetails)}}>
            <AntDesign name="plus" size={18} color="#083344" style={{ display: isPersonalDetails ? "flex" : "none"}} />
            <AntDesign name="minus" size={18} color="#083344" style={{ display: isPersonalDetails ? "none" : "flex" }} />
          </Pressable>

        </View>
        <View style={{ width: "100%", display: isPersonalDetails ? "none" : "flex" }}>
          <View style={{ height: 64 }}>
            <FloatingLabelInput
              label={"Financial Detail 1"}
              value={financialDetail}
              onChangeText={value => setFinancialDetail(value)}

              containerStyles={{ width: "100%", backgroundColor: "#F1F4FF", height: 64, borderRadius: 5, paddingHorizontal: 8 }}
              inputStyles={{}}
            />
          </View>
        </View>
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
          onPress={() => router.push('')}
        >
          <Text style={{ color: "white", fontSize: 20 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}


export default Registratin