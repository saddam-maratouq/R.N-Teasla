import { View, Text , ImageBackground } from 'react-native'
import React from 'react'
import { carStyles }  from './carStyle'
import Butoon from '../cutomButoon/Butoon'

const CarItem = () => {
  return (
    <View style={carStyles.carContainer}>
    <ImageBackground
      source={require("../../assets/images/ModelS.jpeg")}
      style={carStyles.image}
    />
    <View style={carStyles.content}>
      <Text style={carStyles.title}> Modal S </Text>
      <Text style={carStyles.subTitle}> starting at $47.000 </Text>
    </View> 
     
     <View style={carStyles.butoonContainer} >
     <Butoon type='primary'
      content='custom order' 
      onPress={()=> console.warn('custom pressed ')}
       /> 
    
    
     <Butoon type='secoundery' 
      content='exsisting Envetory'
      onPress={()=> console.warn('Exsiting pressed ')}
       
       /> 
     </View>


  </View>
  )
}

export default CarItem ; 