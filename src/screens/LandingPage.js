import React from "react";
import { View, Text, ScrollView, Button } from "react-native";
import { CustomButton } from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from '@react-navigation/native';

export const LandingPage = () => {

    const navigation = useNavigation();

    const onLoginPressed = () => {
        navigation.navigate("Login");
    }

    return (
        <View>
            <Text>
            Welcome To Attendance Checker v1.0
            </Text>
            <CustomButton 
                text="Login"
                onPress={onLoginPressed}
            />
        </View>
    );
};