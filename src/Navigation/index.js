import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LandingPage } from "../screens/LandingPage";
import { Login } from "../screens/Login";
import { Home } from "../screens/Home";
import { CreateAttendance } from "../screens/CreateAttendance";
import { Records } from "../screens/Records";
import { SignUp } from "../screens/SignUp";
import { Students } from "../screens/Students";

const Stack = createNativeStackNavigator();

export const Navigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LandingPage">

                <Stack.Screen
                    name="Welcome"
                    component={LandingPage}
                    options={{
                        title: 'Welcome',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="CreateAttendance"
                    component={CreateAttendance}
                    options={{
                        title: 'CreateAttendance',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Records"
                    component={Records}
                    options={{
                        title: 'Records',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        title: 'SignUp',
                        headerTitleAlign: "center"
                    }}
                />

                <Stack.Screen
                    name="Students"
                    component={Students}
                    options={{
                        title: 'Students',
                        headerTitleAlign: "center"
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}