import { Dimensions, StyleSheet, Text, View,TouchableOpacity } from "react-native"
import React from "react"
import Topnav from "../components/TopNav/Topnav"
import { useState } from "react"
import { color } from "react-native-reanimated"
const Setting = () => {
  const height = Dimensions.get("screen").height
  const width = Dimensions.get("screen").width
  const [click, setClick] = useState(false)
  return (
    <>
      <View>
        <Topnav  />
      </View>
      <View style={{ height: height / 1.8, backgroundColor: "#303030", zIndex: 2 }}>
        <Text style={[styles?.text,{ marginLeft: width / 6, color: "white", marginTop: height/8, }]}>
          List of stored 2FA:
        </Text>
        <Text style={[styles?.text,{ marginLeft: width / 6, color: "white",marginTop: 10,}]}>
          label: Debug-2FA
        </Text>
        <Text style={[styles?.text,{ marginLeft: width / 6, color: "white", marginTop: 10,}]}>
          id: 2a13c78a998546b9cb84024f9dc6f935...
        </Text>
        <Text style={[styles?.text,{ marginLeft: width / 6, color: "white", marginTop: 10, }]}>
          ---------------------------------------------------
        </Text>
        <Text style={[styles?.text,{ marginLeft: width / 6, color: "white", marginTop: height / 6, }]}>
          Select cosigner server from this list:
        </Text>
      </View>
      {click ? (
        <View
          style={{
            height: height / 2.5,
            zIndex: 20,
            backgroundColor: "#585858",
            marginTop: -293,
          }}
        >
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 45 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              https://cosigner.electrum.org
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 51 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              https://cosigner.satochip.io
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 45 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              http://sync.imaginary.cash:8081
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 50 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              https://cosigner.satochip.io:81
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 45 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              https://wrongcosigner.satochip.io
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderBottomWidth: 0.6, borderColor: "black", height: 45 }}>
            <Text style={{ color: "white", alignSelf: "center", marginTop: 10, fontSize: 16,fontFamily: "Playfair", fontWeight: "bold" }}>
              https://www.google.com
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
      <TouchableOpacity onPress={() => setClick(!click)}>
        <View style={{ backgroundColor: "#585858", borderWidth: 1, borderColor: "grey" }}>
          <Text
            style={{
              color: "white",
              opacity: 0.6,
              fontSize: 16,
              alignSelf: "center",
              marginTop: height / 8.5,
              height: height / 2,
              fontFamily: "Playfair", 
              fontWeight: "bold"
            }}
          >
            https://cosigner.electrum.org
          </Text>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default Setting

const styles = StyleSheet.create({
  text:{
    color: "white", fontWeight: "500",
    letterSpacing: 1,
    fontFamily: "Open Sans",
    lineHeight: 22,
  }
})
