import React from 'react'
import {Text,TouchableOpacity, StyleSheet} from 'react-native'
import{Audio} from 'expo-av'

export default class PhonicButton extends React.Component{
  PlaySound = async(soundChunk)=>{
    var  soundLink = "https://s3-whitehatjrcontent.whjr.online/phones/"+ soundChunk +".mp3"
    await Audio.Sound.createAsync({uri: soundLink}, {shouldPlay: true})
  }
    render(){

        return(  
            
            <TouchableOpacity onPress={()=> this.PlaySound(this.props.wordPhone)}>
                <Text style={styles.displayText}>{this.props.wordChunk}</Text>

            </TouchableOpacity>
            
        )

    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
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
  