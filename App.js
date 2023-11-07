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
import db from "./db_1.json"

//console.log(db["the"].chunks)

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      text:"",
      displayText:"",
      chunks:[]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#9c8210"}
          centerComponent={{
            text:"Macaquinho Fofo",
            style:{color:"#fff",fontSize:25}
          }}
        />
        <Image style= {
          styles.imageIcon
        }
        source = {
          require ('./assets/faceMonkey.png')
        }
        />
        <TextInput 
          style={styles.inputBox}
          onChangeText={text=>{this.setState({text:text})}}
        />

        <TouchableOpacity
          style={styles.goButton}
          onPress={()=>{this.setState({chunks:db[this.state.text].chunks})}}
        >
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      <View>
    {this.state.chunks.map(item=>{
      return(
        <TouchableOpacity>
  <Text style={styles.displayText}>{item}</Text>
        </TouchableOpacity>
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
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  imageIcon:{
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});
