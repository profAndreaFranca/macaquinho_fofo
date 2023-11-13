import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "react-native-elements";
import db from "./db_1.json";
import PhonicButton from "./components/PhonicButton";

console.log(db["the"].chunks)

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:"",
      displayText:"",
      chunks:[],
      phones : []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#9c8210"}
          centerComponent={{
            text: "Macaquinho Fofo",
          }}
        />
        <Image
          style={styles.imageIcon}
          source={require("./assets/faceMonkey.png")}
        />
        {/* props são as propriedades dos components ex: style, onPress, onChangeText... */}
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim()
            db[word]
            ? 
            this.setState({ chunks: db[word].chunks,phones: db[word].phones })
            :
            alert("Palavra não encontrada em nosso banco de dados")
          }}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      <View>
    {this.state.chunks.map((item,index)=>{
      return(
        <PhonicButton 
          wordChunk = {item}
          workPhone = {this.state.phones[index]}
        />
      )
      

    })}
      
      </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b8b2a3",
  },
  inputBox: {
    marginTop: 20,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
  },
  goButton: {
    width: "50%",
    height: 55,
    alignSelf: "center",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  displayText: {
    textAlign: "center",
    fontSize: 30,
  },
  imageIcon: {
    height: 150,
    width: 150,
    alignSelf: "center",
  },
});
