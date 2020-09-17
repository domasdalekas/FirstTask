import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, TextInput, View,Button } from 'react-native';

import AppButton from "./changeColorButton"
import TextBox from "./TextBox"

export default function App() {
  const [colorBlack, setColorBlack] = useState("white");
  const [colorBlackSwitch, setColorBlackSwitch] = useState(false);
  const [colorRed, setColorRed] = useState("white");
  const [colorRedSwitch, setColorRedSwitch] = useState(false);
  const [colorGreen, setColorGreen] = useState("white");
  const [colorGreenSwitch, setColorGreenSwitch] = useState(false);
  const [colorOrange, setColorOrange] = useState("white");
  const [colorOrangeSwitch, setColorOrangeSwitch] = useState(false);

  const blackButtonClick = (colorBlack) => {
    if (colorBlackSwitch === false) {
      setColorBlack(colorBlack), setColorBlackSwitch(!colorBlackSwitch);
    } else {
      setColorBlack("white"), setColorBlackSwitch(!colorBlackSwitch);
    }
  };

  const redButtonClick = (colorRed) => {
    if (colorRedSwitch === false) {
      setColorRed(colorRed), setColorRedSwitch(!colorRedSwitch);
    } else {
      setColorRed("white"), setColorRedSwitch(!colorRedSwitch);
    }
  };

  const greenButtonClick = (colorGreen) => {
    if (colorGreenSwitch === false) {
      setColorGreen(colorGreen), setColorGreenSwitch(!colorGreenSwitch);
    } else {
      setColorGreen("white"), setColorGreenSwitch(!colorGreenSwitch);
    }
  };

  const orangeButtonClick = (colorOrange) => {
    if (colorOrangeSwitch === false) {
      setColorOrange(colorOrange), setColorOrangeSwitch(!colorOrangeSwitch);
    } else {
      setColorOrange("white"), setColorOrangeSwitch(!colorOrangeSwitch);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.uppersectionleft}>
       <AppButton title="Button1" onPress={() => blackButtonClick("black")}/>
        <AppButton title="Button2" onPress={() => redButtonClick("red")}/>
       
      </View>
      <View style={styles.uppersectionright}>
        <AppButton title="Button3" onPress={() => greenButtonClick("green")} />
        <AppButton title="Button4" onPress={() => orangeButtonClick("orange")} />
      </View>
     <View style={styles.lowersection}>
     <TextBox title="Text1" color={colorBlack}></TextBox>
     <TextBox title="Text2" color={colorRed}></TextBox>
     <TextBox title="Text3" color={colorGreen}></TextBox>
     <TextBox title="Text4" color={colorOrange}></TextBox>
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
