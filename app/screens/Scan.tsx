import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native"
import React from "react"

import Topnav from "../components/TopNav/Topnav"

const Scan = () => {
  const height = Dimensions.get("screen").height
  const width = Dimensions.get("screen").width

  return (
    <>
      <View>
        <Topnav />
      </View>
      <View style={{ borderWidth: 1, height: height / 2.7, backgroundColor: "#1b1c18" }}>
        <Text
          style={{
            color: "white",
            fontFamily: "Open Sans",
            fontWeight: "500",
            alignSelf: "center",
            marginTop: height / 5,
            lineHeight: 22,
            // letterSpacing:2
          }}
        >
          Click on Scan button to scan a new QR code
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: width / 2,
            height: height / 4.4,
            backgroundColor: "grey",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Open Sans",
              fontWeight: "500",
              alignSelf: "center",
              lineHeight: 22,
            }}
          >
            Enter 2FA description
          </Text>
        </View>
        <View
          style={{
            width: width / 2,
            height: height / 4.4,
            borderWidth: 1
          }}
        >
          <TextInput style={{
            color: "black", fontFamily: "Open Sans",
            fontWeight: "500",
            lineHeight: 22,
          
          }} placeholderTextColor="red" />
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: width / 2,
            height: height / 4,
            backgroundColor: "#585953",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Open Sans",
              fontWeight: "500",
              alignSelf: "center",
              lineHeight: 22,

            }}
          >
            Scan QR code
          </Text>
        </View>
        <View
          style={{
            width: width / 2,
            height: height / 4,
            backgroundColor: "#2d2d2a",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Open Sans",
              fontWeight: "500",
              alignSelf: "center",
              lineHeight: 22,

            }}
          >
            confirm QR code
          </Text>
        </View>
      </View>
    </>
  )
}

export default Scan

const styles = StyleSheet.create({})
