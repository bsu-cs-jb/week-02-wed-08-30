import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function NoisyView() {
  console.log(`NoisyView() created ${new Date().toLocaleTimeString()}`);

  return <View />;
}

console.log("Global init");

export default function App() {
  console.log("App() created");

  const [timerValue, setTimerValue] = useState(0);
  const [timerName, setTimerName] = useState("");
  const [timerLength, setTimerLength] = useState(5);

  const myUseEffect = () => {
    console.log("myUseEffect()");
  };

  useEffect(() => {
    console.log("useEffect()");
    if (timerValue >= timerLength) {
      console.log("DONE");
      setTimerValue(0);
    } else {
      setTimeout(() => {
        setTimerValue(timerValue + 1);
      }, 1000);
    }
  }, [timerLength, timerValue]);

  const handleLengthChanged = (text: string) => {
    console.log(`handleLengthChanged(${text})`);
    setTimerLength(parseInt(text));
  };

  const handleTextChanged = (text: string) => {
    console.log(`handleTextChanged(${text})`);
    setTimerName(text);
  };

  const handleStartPressed = () => {
    console.log(`handleStartPressed(${timerValue})`);
    setTimerValue(0);
  };

  const statusBarRef = useRef();

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{timerValue}</Text>
      <Text style={styles.timer}>{timerName}</Text>
      <View style={{ flex: 1 }} />
      <View style={{ flexDirection: "row" }}>
        <Text>Alarm Label:</Text>
        <TextInput
          style={{ flex: 1, borderWidth: 2 }}
          onChangeText={handleTextChanged}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text>Alarm Length:</Text>
        <TextInput
          style={{ flex: 1, borderWidth: 2 }}
          onChangeText={handleLengthChanged}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Stop" onPress={() => console.log("stop")} />
        <View style={{ flex: 1 }} />
        <Button title="Start" onPress={handleStartPressed} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 30,
    flexDirection: "row",
  },
  startStopButton: {
    fontSize: 30,
  },
  timer: {
    fontSize: 50,
  },
  container: {
    paddingTop: 80,
    paddingBottom: 80,
    flex: 1,
    backgroundColor: "#faf",
    alignItems: "center",
    justifyContent: "center",
  },
});
