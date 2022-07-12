import React from "react";
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from "react-native";

const colorGithub = "#010409";
const colorFontGithub = "#C9D1D9";
const colorDarkFontGitHub = "#4F565E";

const imageProfileGitHub =
  "https://avatars.githubusercontent.com/u/98062444?v=4";
const urlToMyGithub = "https://github.com/gaabrieltorres7";

const App = () => {
  const handlePressGoToGitHub = async () => {
    console.log("Verificando link");
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log("Link aprovado");
      console.log("Abrindo link...");
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Gabriel usando óculos com uma camisa amarela"
          style={style.avatar}
          source={{ uri: imageProfileGitHub }}
        />
        <Text
          accessibilityLabel="Nome: Gabriel Torres"
          style={[style.defaultText, style.name]}
        >
          Gabriel Torres
        </Text>
        <Text
          accessibilityLabel="Nickname: gaabrieltorres7"
          style={[style.defaultText, style.nickname]}
        >
          gaabrieltorres7
        </Text>
        <Text
          accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas"
          style={[style.defaultText, style.description]}
        >
          Estudante de Análise e Desenvolvimento de Sistemas
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //Column
    backgroundColor: colorGithub,
    flex: 1, //expandir para a tela inteira
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGitHub,
  },
  description: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGitHub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
