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
import { AppLoading } from "expo";
import LOGOSVG from "../../assets/images/add.svg";
import * as Font from "expo-font";
const loadFonts = async () => {
  await Font.loadAsync({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isReady, setIsReady] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    Alert.alert("Credentials", `${email} + ${password}`);
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
              <Text style={styles.title}>To come in</Text>

              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="Email"
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
                <Text style={styles.buttonText}>To come in</Text>
              </TouchableOpacity>
              <View style={styles.signContainer}>
                <Text style={styles.signContainerText}>
                  Don't have an account?
                </Text>
                <TouchableOpacity>
                  <Text style={styles.signContainerButton}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    marginBottom: 10,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,

    fontFamily: "RobotoRegular",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    marginBottom: 16,
  },
  buttonText: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto-Regular",
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
    width: 415,
    height: 489,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 360,
    background: "#FFFFFF",
    borderRadius: 25,
  },
  inputImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    justifyContent: "center",
    position: "absolute",
    top: -130,
    left: -50,
  },
  buttonAddImage: {
    width: 25,
    height: 25,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
  buttonAddImageText: {
    color: "#FF6C00",
  },
  signContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  signContainerText: {
    fontFamily: "Roboto-Regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  signContainerButton: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
