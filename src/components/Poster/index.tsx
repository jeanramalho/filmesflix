import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"


const Poster = ({pontos, participante}) => {

    return (
           
      <View style={styles.container}>
        <Text style={styles.participante}>{participante}</Text>
        <View style={styles.pontuacao}>
            <Text>{pontos}</Text>
            <Text>pts</Text>
        </View>                  
       
      </View>
    )
  
}

export default Poster