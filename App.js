import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';

import AppButton from "./changeColorButton"
import TextBox from "./TextBox"

export default function App() {
  const [colorIndigo, setcolorIndigo] = useState("white");
  const [colorIndigoSwitch, setcolorIndigoSwitch] = useState(false);
  const [colorMaroon, setcolorMaroon] = useState("white");
  const [colorMaroonSwitch, setcolorMaroonSwitch] = useState(false);
  const [colorNavy, setcolorNavy] = useState("white");
  const [colorNavySwitch, setcolorNavySwitch] = useState(false);
  const [colorSalmon, setcolorSalmon] = useState("white");
  const [colorSalmonSwitch, setcolorSalmonSwitch] = useState(false);

  const blackButtonClick = (colorIndigo) => {
    if (colorIndigoSwitch === false) {
      setcolorIndigo(colorIndigo), setcolorIndigoSwitch(!colorIndigoSwitch);
    } else {
      setcolorIndigo("white"), setcolorIndigoSwitch(!colorIndigoSwitch);
    }
  };

  const redButtonClick = (colorMaroon) => {
    if (colorMaroonSwitch === false) {
      setcolorMaroon(colorMaroon), setcolorMaroonSwitch(!colorMaroonSwitch);
    } else {
      setcolorMaroon("white"), setcolorMaroonSwitch(!colorMaroonSwitch);
    }
  };

  const greenButtonClick = (colorNavy) => {
    if (colorNavySwitch === false) {
      setcolorNavy(colorNavy), setcolorNavySwitch(!colorNavySwitch);
    } else {
      setcolorNavy("white"), setcolorNavySwitch(!colorNavySwitch);
    }
  };

  const orangeButtonClick = (colorSalmon) => {
    if (colorSalmonSwitch === false) {
      setcolorSalmon(colorSalmon), setcolorSalmonSwitch(!colorSalmonSwitch);
    } else {
      setcolorSalmon("white"), setcolorSalmonSwitch(!colorSalmonSwitch);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.uppersectionleft}>
       <AppButton title="Button1" onPress={() => blackButtonClick("indigo")}/>
        <AppButton title="Button2" onPress={() => redButtonClick("maroon")}/>
       
      </View>
      <View style={styles.uppersectionright}>
        <AppButton title="Button3" onPress={() => greenButtonClick("navy")} />
        <AppButton title="Button4" onPress={() => orangeButtonClick("salmon")} />
      </View>
     <View style={styles.lowersection}>
     <TextBox title="Text1" color={colorIndigo}></TextBox>
     <TextBox title="Text2" color={colorMaroon}></TextBox>
     <TextBox title="Text3" color={colorNavy}></TextBox>
     <TextBox title="Text4" color={colorSalmon}></TextBox>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  uppersectionleft:{
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: 'lightgreen',
    height: "100%",
    width:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
  uppersectionright:{
    flex: 0.5,
    flexDirection: "row",
    backgroundColor: 'lightgreen',
    height: "100%",
    width:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
  lowersection:{
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width:"100%",
    backgroundColor: 'lightblue',
    alignItems: "center",
    justifyContent: "space-evenly"
  },
});
