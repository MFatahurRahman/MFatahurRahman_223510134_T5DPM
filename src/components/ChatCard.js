import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function ChatCard({ chat, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Text style={styles.title}>{chat.title}</Text>
      <Text style={styles.message}>{chat.lastMessage}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
    fontSize: 14,
    marginTop: 4,
  },
});