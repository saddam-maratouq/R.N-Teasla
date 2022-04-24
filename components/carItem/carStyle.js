
import { StyleSheet , Dimensions } from 'react-native'


 export  const carStyles = StyleSheet.create({ 
    carContainer: {
        width: "100%",
        height: Dimensions.get('screen').height,
      },
      content: {
        marginTop: "30%",
        width: "100%",
        alignItems: "center",
      },
      title: {
        fontSize: 40,
        fontWeight: "600",
      },
      subTitle: {
        fontSize: 16,
        color: "#5c5e62",
      },
      tagunderline : {
        textDecorationLine:'underline' 
      },
      image: {
        width: "100%",
        height: '100%',
        resizeMode:'cover',
        position: 'absolute',
      }, 
      butoonContainer : {
         position:'absolute',
         bottom:70, 
         width:'100%', 
      }
})

