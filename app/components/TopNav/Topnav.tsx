import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native"
import React, { useState } from "react"
import { ScrollView } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

const Topnav = () => {
  const width = Dimensions.get("screen").width
  const navigation = useNavigation()


  return (
    <ScrollView horizontal bounces={true} alwaysBounceHorizontal={true} >
      <View style={{ backgroundColor: "grey", height: 38 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>


          <TouchableOpacity
            style={{
              borderWidth: 0.9, padding: 8, width: width / 3.5, shadowColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 9,
              shadowRadius: 16.00,
              elevation: 24,

            }}
            onPress={() => {navigation.navigate("TX")}}
          >
            <Text style={styles.i}>Tx</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.9, padding: 8, width: width / 3.5, shadowColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 9,
              shadowRadius: 16.00,
              elevation: 24,
            }}
            onPress={() => navigation.navigate("Scan1")}
          >
            <Text style={styles.i}>Scan QR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.9, padding: 8, width: width / 3.5, shadowColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 9,
              shadowRadius: 16.00,
              elevation: 24,
            }}
            onPress={() => navigation.navigate("Setting")}
          >
            <Text style={styles.i}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 0.9, padding: 8, width: width / 3.5, shadowColor: "#fff",
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 9,
              shadowRadius: 16.00,
              elevation: 24,
            }}
            onPress={() => navigation.navigate("Logs")}
          >
            <Text style={styles.i}>Logs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Topnav

const styles = StyleSheet.create({
  i: {
    color: "white",
    fontFamily: "Open Sans",
    fontSize: 15,
    fontWeight: "500",
    alignSelf: "center",
    // letterSpacing:3
  }
})
