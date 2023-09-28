import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <Text style={styles.Text1}>
        <Text>GROW</Text>
      </Text>
      <Text style={styles.Text2}>
        <Text>YOUR BUSSINESS</Text>
      </Text>
      <Text style={styles.Text3}>
        <Text>We will help you to grow your business using</Text>
      </Text>
      <Text style={styles.Text4}>
        <Text>online server</Text>
      </Text>
      <View style={styles.button}>
        <Pressable style={styles.bgButton}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Pressable style={styles.bgButton}>
          <Text style={styles.text}>Sing up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4edbfb',
    alignItems: "center",
  },
  view1: {
    marginTop: 50,
    width: 140,
    height: 140,
    borderColor: '#333',
    borderWidth: 12,
    borderRadius: 90,
  },


  Text1: {
    marginTop: 50,
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  Text2: {
    alignItems: "center",
    fontSize: 25,
    fontWeight: 'bold',
  },
  Text3: {
    marginTop: 100,
    alignItems: "center",
    fontSize: 15,
    fontWeight: 'bold',
  },
  Text4: {
    alignItems: "center",
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 100,
  },
  bgButton: {
    width: 119,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "#f3c000",
    marginLeft:25,
  },
  text: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: 'bold'
  }
});
