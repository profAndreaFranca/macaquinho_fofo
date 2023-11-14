import React from 'react'
import {Text,TouchableOpacity, StyleSheet} from 'react-native'
import{Audio} from 'expo-av'

export default class PhonicButton extends React.Component{
  constructor(){
    super()
    this.state = {
      pressedButtonIndex = ""
    }
  }
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
    displayText: {
      textAlign: "center",
      fontSize: 30,
    },
    chunkButton:{
      width:'70%',
      height: 50 ,
      justifyContent: 'center' ,
      alignItems: 'center' ,
      borderRadius: 10
    }
   
  });
  