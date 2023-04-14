import {Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import styles from "./style"


const Poster = ({pontos, participante}) => {

    return (
           
      <View style={styles.container}>
                   <Image
              source={{
                uri: `https://m.media-amazon.com/images/I/81jEuP2Dn1L.jpg`,
              }}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
            />    
       
      </View>
    )
  
}

export default Poster