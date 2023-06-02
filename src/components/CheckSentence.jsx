import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const CheckSentence = () => {
  var posTagger = require('wink-pos-tagger');
  var tagger = posTagger();

  const [sentence, setSentence] = useState('');
  const [myArr, setMyArr] = useState([]);
  const [flag, setFlag] = useState(false);
  const [myColor, setMyColor] = useState('#fff');
  const [noun, setNoun] = useState(false);
  const [verb, setVerb] = useState(false);
  const [adverb, setAdverb] = useState(false);
  const [adjective, setAdjective] = useState(false);
  const [pronoun, setPronoun] = useState(false);
  const [preposition, setPreposition] = useState(false);
  const [conjuction, setConjuction] = useState(false);
  const [determiner, setDeterminer] = useState(false);
  const [interjection, setInterjection] = useState(false);

  /**
   * ON CLICKING OPTION BUTTONS
   * @param {*} event
   */
  const handlePress = myTitle => {
    if (flag) {
      if (myTitle === 'Nouns') {
        console.log(tagger.tagSentence(myArr.join(' ')));
        setFlag(false);
        setNoun(true);
        console.log(noun);
        setFlag(true);
      } else if (myTitle === 'Verbs') {
        setFlag(false);
        setVerb(true);
        console.log(verb);
        setFlag(true);
      } else if (myTitle === 'Adjectives') {
        setFlag(false);
        setAdjective(true);
        console.log(adjective);
        setFlag(true);
      } else if (myTitle === 'Adverbs') {
        setFlag(false);
        setAdverb(true);
        console.log(adverb);
        setFlag(true);
      } else if (myTitle === 'Pronoun') {
        setFlag(false);
        setPronoun(true);
        console.log(pronoun);
        setFlag(true);
      } else if (myTitle === 'Preposition') {
        setFlag(false);
        setPreposition(true);
        console.log(preposition);
        setFlag(true);
      } else if (myTitle === 'Conjuction') {
        setFlag(false);
        setConjuction(true);
        console.log(conjuction);
        setFlag(true);
      } else if (myTitle === 'Determiner') {
        setFlag(false);
        setDeterminer(true);
        console.log(determiner);
        setFlag(true);
      } else if (myTitle === 'Interjection') {
        setFlag(false);
        setInterjection(true);
        console.log(interjection);
        setFlag(true);
      } else {
      }
    } else {
    }
  };

  /**
   * ON CLICKING SUBMIT BUTTON
   */
  const handleSubmit = () => {
    setNoun(false);
    setVerb(false);
    setAdjective(false);
    setAdverb(false);
    setPronoun(false);
    setPreposition(false);
    setConjuction(false);
    setDeterminer(false);
    setInterjection(false);
    let arr = sentence.split(' ');
    setMyArr(arr);
    setSentence('');
    setFlag(true);
  };

  useEffect(() => {}, [flag, noun]);

  const handleChangeText = text => {
    setSentence(text);
  };
  // var posTagger = require('wink-pos-tagger');
  // var tagger = posTagger();
  // console.log(tagger.tagSentence('He is trying to fish for fish in the lake.'));

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Input Box */}
        <View style={styles.views}>
          <TextInput
            value={sentence}
            placeholder="Enter Your Sentence"
            onChangeText={handleChangeText}
            style={styles.inputBox}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>

        {/* tagger.tagSentence(str).pos == 'VB'?'#0079FF' : */}

        {/* Show The Sentence */}
        <Text style={{fontWeight: 'bold', fontSize: 15}}>
          Press Submit to show Sentence Below
        </Text>
        <View style={styles.views}>
          {setFlag && (
            <View style={{flexDirection: 'row'}}>
              {myArr.map((str, index) => (
                <View
                  key={index}
                  style={[
                    styles.sentenceView,
                    {
                      backgroundColor:
                        noun &&
                        (tagger.tagSentence(str)[0].pos === 'NNP' ||
                          tagger.tagSentence(str)[0].pos === 'NN' ||
                          tagger.tagSentence(str)[0].pos === 'NNS')
                          ? '#F6FA70'
                          : verb &&
                            (tagger.tagSentence(str)[0].pos === 'VB' ||
                              tagger.tagSentence(str)[0].pos === 'MD' ||
                              tagger.tagSentence(str)[0].pos === 'VBP' ||
                              tagger.tagSentence(str)[0].pos === 'VBG' ||
                              tagger.tagSentence(str)[0].pos === 'VBN')
                          ? '#0079FF'
                          : adverb &&
                            (tagger.tagSentence(str)[0].pos === 'RB' ||
                              tagger.tagSentence(str)[0].pos === 'WRB')
                          ? '#00DFA2'
                          : adjective &&
                            (tagger.tagSentence(str)[0].pos === 'JJ' ||
                              tagger.tagSentence(str)[0].pos === 'JJR' ||
                              tagger.tagSentence(str)[0].pos === 'JJS')
                          ? '#FF0060'
                          : pronoun &&
                            (tagger.tagSentence(str)[0].pos === 'PRP' ||
                              tagger.tagSentence(str)[0].pos === 'WP' ||
                              tagger.tagSentence(str)[0].pos === 'PDT' ||
                              tagger.tagSentence(str)[0].pos === 'CD')
                          ? '#FF55BB'
                          : preposition &&
                            tagger.tagSentence(str)[0].pos === 'IN'
                          ? '#0C134F'
                          : conjuction &&
                            tagger.tagSentence(str)[0].pos === 'CC'
                          ? '#E55807'
                          : determiner &&
                            tagger.tagSentence(str)[0].pos === 'DT'
                          ? '#A459D1'
                          : interjection &&
                            tagger.tagSentence(str)[0].pos === 'UH'
                          ? '#FD8A8A'
                          : '#fff',
                    },
                  ]}>
                  <Text>{str} </Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Options */}
        <View style={styles.views}>
          {/* Yellow */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#F6FA70'}]}
            onPress={() => handlePress('Nouns')}>
            {/* color={'#F6FA70'} */}
            <Text>Nouns</Text>
          </Pressable>

          {/* Blue */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#0079FF'}]}
            onPress={() => handlePress('Verbs')}>
            <Text>Verbs</Text>
          </Pressable>

          {/* Green */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#00DFA2'}]}
            onPress={() => handlePress('Adverbs')}>
            <Text>Adverbs</Text>
          </Pressable>

          {/* Red */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#FF0060'}]}
            onPress={() => handlePress('Adjectives')}>
            <Text>Adjectives</Text>
          </Pressable>

          {/* Pink */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#FF55BB'}]}
            onPress={() => handlePress('Pronoun')}>
            <Text>Pronoun</Text>
          </Pressable>

          {/* Dark Blue */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#0C134F'}]}
            onPress={() => handlePress('Preposition')}>
            <Text style={{color: '#fff'}}>Preposition</Text>
          </Pressable>

          {/* Orange */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#E55807'}]}
            onPress={() => handlePress('Conjuction')}>
            <Text>Conjuction</Text>
          </Pressable>

          {/* Purple */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#A459D1'}]}
            onPress={() => handlePress('Determiner')}>
            <Text>Determiner</Text>
          </Pressable>

          {/* Tomato */}
          <Pressable
            style={[styles.botton, {backgroundColor: '#FD8A8A'}]}
            onPress={() => handlePress('Interjection')}>
            <Text>Interjection</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckSentence;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 2,
  },
  views: {
    width: '90%',
    margin: 30,
  },
  botton: {
    margin: 8,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    // backgroundColor: 'red'
  },
  sentenceView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 2,
  },
});

/**
 *
 *  [{"normal": "he", "pos": "PRP", "tag": "word", "value": "He"},
 *  {"lemma": "be", "normal": "is", "pos": "VBZ", "tag": "word", "value": "is"},
 *  {"lemma": "try", "normal": "trying", "pos": "VBG", "tag": "word", "value": "trying"},
 *  {"normal": "to", "pos": "TO", "tag": "word", "value": "to"},
 *  {"lemma": "fish", "normal": "fish", "pos": "VB", "tag": "word", "value": "fish"},
 *  {"normal": "for", "pos": "IN", "tag": "word", "value": "for"},
 *  {"lemma": "fish", "normal": "fish", "pos": "NN", "tag": "word", "value": "fish"},
 *  {"normal": "in", "pos": "IN", "tag": "word", "value": "in"},
 *  {"normal": "the", "pos": "DT", "tag": "word", "value": "the"},
 *  {"lemma": "lake", "normal": "lake", "pos": "NN", "tag": "word", "value": "lake"},
 *  {"normal": ".", "pos": ".", "tag": "punctuation", "value": "."}]
 *
 *
 *
 */

/**
 * INPUT BOX ==> SUBMIT BUTTON ==> TEXT(SENTENCE)
 *
 * BUTTONS
 *
 */
