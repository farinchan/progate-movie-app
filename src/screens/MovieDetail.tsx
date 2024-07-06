import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MovieDetail = ({navigation}:any):JSX.Element => {
  return (
    <View style={styles.container}>
        <Text>MovieDetail</Text>
        <Button title='Pindah Halaman' onPress={()=>
          navigation.navigate('Home') 
      }/>
    </View> 
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
},
})



export default MovieDetail