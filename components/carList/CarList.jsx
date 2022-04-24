import { StyleSheet,  View , FlatList,Dimensions } from 'react-native'
import React from 'react'
import car from '../../data/car'
import CarItem from '../carItem/CarItem'

const CarList = () => {
   

  return (
      <View style={styles.container}>

   <FlatList 
    data={car}
    renderItem={({item}) =>  <CarItem   cars={item}  /> } 
    showsVerticalScrollIndicator={false}
    snapToAlignment={'start'}
    decelerationRate={'fast'}
    snapToInterval={Dimensions.get('screen').height} 
   /> 
      </View>
  )
}


export default CarList

const styles = StyleSheet.create({
    container : {
        width:'100%',     
    }
})