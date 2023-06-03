import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const stack = ['red', 'blue', 'green', 'orange'];

const SentenceComponent = () => {
  const [sentenceWords, setSentenceWords] = useState(['This', 'is', 'a', 'sample', 'sentence']);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleWordPress = (index) => {
    setSelectedWordIndex(index);
    setSelectedOptionIndex(null);
  };

  const handleOptionPress = (index) => {
    if (selectedWordIndex !== null) {
      const updatedSentenceWords = [...sentenceWords];
      updatedSentenceWords[selectedWordIndex] = (
        <Text key={selectedWordIndex} style={{ color: stack[stack.length - 1] }}>
          {sentenceWords[selectedWordIndex]}
        </Text>
      );
      setSentenceWords(updatedSentenceWords);

      setSelectedWordIndex(null);
      setSelectedOptionIndex(index);

      stack.pop();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sentenceContainer}>
        {sentenceWords.map((word, index) => (
          <Pressable
            key={index}
            onPress={() => handleWordPress(index)}
            style={[
              styles.wordPressable,
              index === selectedWordIndex ? { backgroundColor: stack[stack.length - 1] } : null,
            ]}
          >
            <Text style={styles.word}>{word}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.optionsContainer}>
        {[1, 2, 3, 4].map((option, index) => (
          <Pressable
            key={index}
            onPress={() => handleOptionPress(index)}
            style={[
              styles.option,
              index === selectedOptionIndex ? { backgroundColor: stack[stack.length - 1] } : null,
            ]}
            disabled={selectedWordIndex === null}
          >
            <Text style={styles.optionText}>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentenceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  wordPressable: {
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 10,
  },
  word: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  option: {
    width: '23%',
    aspectRatio: 1,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SentenceComponent;
