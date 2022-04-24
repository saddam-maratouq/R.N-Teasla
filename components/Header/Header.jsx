import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
     <Image  
        source={ require ('../../assets/images/logo.png') } 
        style={styles.logo}
        resizeMode={'contain'}
     /> 
     <Image
         source={ require ('../../assets/images/menu.png') } 
        style={styles.menu}
        resizeMode={'contain'}
     /> 
     
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        position:'absolute',
        top:70,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20, 
        zIndex:100,
        width:'100%'
    },
    logo : {
        width: 100,
        height: 20,
    },
    menu : {
        width: 25,
        height: 25,
    },
})