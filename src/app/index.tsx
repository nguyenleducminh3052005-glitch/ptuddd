import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [screen, setScreen] = useState(1);
  const [username, setUsername] = useState("");
  const [studentId, setStudentId] = useState("");
  const [validationError, setValidationError] = useState("");

  const goToScreenTwo = () => {
    if (!username.trim() || !studentId.trim()) {
      setValidationError("Please enter both your username and student ID.");
      return;
    }
    setValidationError("");
    setScreen(2);
  };

  if (screen === 2) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.screenTwo}>
          <Pressable
            accessibilityLabel="black-arrow"
            style={styles.backButton}
            onPress={() => setScreen(1)}
          >
            <Text style={styles.backButtonText}>←</Text>
          </Pressable>
          <Text style={styles.screenTwoText}>Screen 2</Text>
          <View style={styles.studentDetails}>
            <Text style={styles.detailText}>Username: {username.trim()}</Text>
            <Text style={styles.detailText}>Student ID: {studentId.trim()}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.phone}>
        <View style={styles.content}>
          <View style={[styles.box, styles.blue, { height: 70 }]}>
            <Text style={styles.text}>1</Text>
          </View>

          <View style={[styles.box, styles.red, { height: 70 }]}>
            <Text style={styles.text}>2</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.box, styles.small, styles.yellow]}>
              <Text style={styles.textDark}>3</Text>
            </View>
            <View style={[styles.box, styles.small, styles.green]}>
              <Text style={styles.text}>4</Text>
            </View>
            <View style={[styles.box, styles.small, styles.purple]}>
              <Text style={styles.text}>5</Text>
            </View>
          </View>

          <View style={[styles.box, styles.orange, { height: 122 }]}>
            <Text style={styles.text}>6</Text>
          </View>
        </View>

        <View style={styles.form}>
          <TextInput
            accessibilityLabel="Username"
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            accessibilityLabel="Student ID"
            style={styles.input}
            placeholder="Student ID"
            value={studentId}
            onChangeText={setStudentId}
          />
          {!!validationError && <Text style={styles.errorText}>{validationError}</Text>}
        </View>
        <Text style={styles.footerText}>nldminh - BIT240160</Text>
        <Pressable style={styles.clickButton} onPress={goToScreenTwo}>
          <Text style={styles.clickButtonText}>CLICK HERE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  phone: {
    flex: 1,
    width: "100%",
    maxWidth: 390,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 6,
    gap: 6,
  },
  box: { justifyContent: "center", alignItems: "center" },
  row: { height: 146, flexDirection: "row", gap: 6 },
  small: { width: "24%", height: "100%" },
  blue: { backgroundColor: "#2f7bf0" },
  red: { backgroundColor: "#f0403f" },
  yellow: { backgroundColor: "#ffd21f" },
  green: { backgroundColor: "#31a05a" },
  purple: { backgroundColor: "#7b2fdb" },
  orange: { backgroundColor: "#f5820a" },
  text: { color: "#fff", fontSize: 24, fontWeight: "bold" },
  textDark: { color: "#000", fontSize: 24, fontWeight: "bold" },
  footerText: {
    textAlign: "center",
    fontSize: 13,
    color: "#333",
    paddingBottom: 16,
  },
  clickButton: {
    alignSelf: "center",
    backgroundColor: "#000",
    borderRadius: 6,
    paddingHorizontal: 24,
    paddingVertical: 10,
    marginBottom: 16,
  },
  clickButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  form: { paddingHorizontal: 14, gap: 8, paddingBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 16,
  },
  errorText: { color: "#c00", fontSize: 14 },
  screenTwo: { flex: 1, padding: 16 },
  backButton: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  backButtonText: { color: "#000", fontSize: 32 },
  screenTwoText: { flex: 1, textAlign: "center", textAlignVertical: "center", fontSize: 24 },
  studentDetails: { paddingBottom: 24, gap: 8 },
  detailText: { fontSize: 18, textAlign: "center" },
});