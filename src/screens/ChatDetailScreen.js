import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChatDetailScreen({ route, navigation }) {
  const { chatId } = route.params;

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pesan</Text>
      </View>

      {/* Chat Content */}
      <View style={styles.content}>
        <Text style={styles.text}>Pesan Ke: {chatId}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    padding: 8,
    backgroundColor: '#333',
    borderRadius: 8,
  },
  header: {
    marginTop: 80,
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});
