import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ChatCard from '../components/ChatCard';
import SearchBar from '../components/SearchBar'; // Import SearchBar
import dummyChats from '../constants/chats';

export default function ChatsScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredChats, setFilteredChats] = useState(dummyChats);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = dummyChats.filter((chat) =>
      chat.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredChats(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Add SearchBar */}
      <SearchBar
        placeholder="Search chats..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChatCard
            chat={item}
            onPress={() => navigation.navigate('ChatDetail', { chatId: item.id })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 10,
  },
});
