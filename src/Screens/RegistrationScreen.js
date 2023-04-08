// RegistrationForm

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Button,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import { AppLoading } from 'expo';

import * as Font from "expo-font";
// const loadFonts = async () => {
//     await Font.loadAsync({
//       "RobotoRegular": require("../../assets/fonts/Roboto-Regular.ttf"),
//       "RobotoBold": require("../../assets/fonts/Roboto-Bold.ttf"),
//     });
//   };

const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isReady, setIsReady] = useState(false)

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${login} + ${password}`);
  };
  // if (!isReady) {
  //   return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
  // }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={require("../../assets/images/PhotoBG.jpg")}
            style={styles.image}
          >
            <View style={styles.formContainer}>
              <View style={styles.formAddImage}>
                <TextInput style={styles.inputImage} />
                <TouchableOpacity style={styles.buttonAddImage}>
                  <Text style={styles.buttonAddImageText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Registration</Text>
              <TextInput
                value={login}
                onChangeText={loginHandler}
                placeholder="User Login"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
                // secureTextEntry={true}
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />

              <TouchableOpacity style={styles.button} onPress={onLogin}>
                <Text style={styles.buttonText}>Registration</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default RegistrationForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // width: 200,
    // backgroundColor: "#ecf0f1",
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "1px solid #E8E8E8",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    // fontFamily: 'RobotoRegular',
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    justifyContent: "center",
    textAlign: "center",
    // fontFamily: 'RobotoRegular',
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  title: {
    // fontFamily: 'Roboto';
    // fontStyle: normal,
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: "0.01em",
    color: "#212121",
    marginBottom: 32,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // width: 420,
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 125,
    paddingRight: 93.5,
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    // paddingTop: 219,
  },
  inputImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    justifyContent: "center",
  },
  buttonAddImage: {
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderColor: "1px solid #FF6C00",

    // color: '#FF6C00',
  },
  buttonAddImageText: {
    color: "#FF6C00",
  },
});
