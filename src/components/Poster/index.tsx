import {Text, View, Image} from 'react-native'
import React, { Component } from 'react'
import styles from "./style"


const Poster = ({pontos, participante}) => {

    return (
           
      <View style={styles.container}>
                   <Image
              source={{
                uri: `${MOVIE_IMAGE_URL}/${
                  featuredMovie.poster_path || featuredMovie.backdrop_path
                }`,
              }}
              resizeMode="cover"
              style={StyleSheet.absoluteFill}
            />    
       
      </View>
    )
  
}

export default Poster