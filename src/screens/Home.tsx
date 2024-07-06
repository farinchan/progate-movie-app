import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Home = ({navigation}:any):JSX.Element => {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
        <Button title='Pindah Halaman' onPress={()=>
          navigation.navigate('MovieDetail') 
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



export default Home