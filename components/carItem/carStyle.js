
import { StyleSheet } from 'react-native'


 export  const carStyles = StyleSheet.create({ 
    carContainer: {
        width: "100%",
        height: "100%",
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
      image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        resizeMode: "cover",
      }, 
      butoonContainer : {
         position:'absolute',
         bottom:30, 
         width:'100%',
      }
})

