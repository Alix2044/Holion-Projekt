import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  const app = initializeApp(firebaseConfig);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#123fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const firebaseConfig = {
  apiKey: "AIzaSyAW_vS0D-nklGSfxfw1Ab9BpEYDEltMGTs",
  authDomain: "test-fa178.firebaseapp.com",
  projectId: "test-fa178",
  storageBucket: "test-fa178.appspot.com",
  messagingSenderId: "786951890745",
  appId: "1:786951890745:web:28bf92648887107621eae8",
  measurementId: "G-4TZZM7PX1S"
};

