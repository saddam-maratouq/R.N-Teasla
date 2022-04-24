import { View, Text , ImageBackground } from 'react-native'
import React from 'react'
import { carStyles }  from './carStyle'
import Butoon from '../cutomButoon/Butoon'





const CarItem = ({cars}) => { 

  const { name , image , tagline , taglineCTA} = cars
  // console.log(name)  

  return (
    <View style={carStyles.carContainer}>
    <ImageBackground
      source={image} 
      style={carStyles.image} 
    />
    <View style={carStyles.content}>
      <Text style={carStyles.title}> {name} </Text>
      <Text style={carStyles.subTitle}> 
      {tagline} {''}
      <Text style={carStyles.tagunderline}>{taglineCTA}</Text> 
      </Text> 
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