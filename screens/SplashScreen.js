import React from "react";
import { View, 
Text, 
Button, 
StyleSheet } from "react-native";

const styles  = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
}); 


const SplashScreen = () => {
 
    return (
        <View style={styles.container}>
              <Text>SplashScreen</Text>
            <Button 
            title="Click Here" 
            onPress={() => alert('Button Cliked ')}/>
        </View>
    );

};
export default SplashScreen ; 
