import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { Text, TextInput, TextStyle, View, ViewStyle, Dimensions } from "react-native"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import Topnav from "../components/TopNav/Topnav"
interface TXScreenProps extends AppStackScreenProps<"TX"> { }
const height = Dimensions.get("screen").height
const width = Dimensions.get("screen").width
export const TXScreen: FC<TXScreenProps> = observer(function TXScreen(_props) {
  return (
    <>
      <View>
        <Topnav />
      </View>
      <View style={{
        backgroundColor: "#1b1c18", borderWidth: 1, height: height / 2, alignItems: "center",
        justifyContent: "center"
      }}>
        <Text
          style={{
            color: "white",
            fontFamily: "Open Sans",
            fontWeight: "500",
            alignSelf: "center",
            lineHeight: 22,
            // letterSpacing:2
          }}
        >
          Error: Can not connect to server !
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            height: height / 2.8,
            width: width / 2,
            backgroundColor: "#2e3026",
            shadowColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 9,
            shadowRadius: 16.00,
            elevation: 24,
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
              // letterSpacing:2

            }}
          >
            Approve Tx!
          </Text>
        </View>
        <View
          style={{
            height: height / 2.8,
            width: width / 2,
            backgroundColor: "#2e3026",
            borderStartWidth: 1,
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
              // marginTop: height / 5,
              lineHeight: 22,
              // letterSpacing:2

            }}
          >
            Reject Tx!
          </Text>
        </View>
      </View>
    </>
  )
})
