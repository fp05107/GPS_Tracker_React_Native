import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Sample = () => {
  const [flag, setFlag] = useState(false);
  const [wordflag, setWordflag] = useState(false);
  const [zero, setZero] = useState(false);
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const [opt1, setOpt1] = useState(false);
  const [opt2, setOpt2] = useState(false);
  const [opt3, setOpt3] = useState(false);
  const [opt4, setOpt4] = useState(false);

  const [arrIndex, setArrIndex] = useState(0);

  const stack = ['red', 'blue', 'orange', 'tomato'];

  const obj = {
    'red':[0,1,2],
    'green':[3,4],
    'blue':[5,6]
  }

  const handlePressOpt1 = () => {
    console.log(stack);
    console.log(arrIndex);

    setOpt1(true);
    if (arrIndex < stack.length) {
      setArrIndex(arrIndex + 1);
    }
  };
  const handlePressOpt2 = () => {
    setOpt2(true);
    if (arrIndex < stack.length) {
      setArrIndex(arrIndex + 1);
    }
  };
  const handlePressOpt3 = () => {
    setOpt3(true);
    if (arrIndex < stack.length) {
      setArrIndex(arrIndex + 1);
    }
  };
  const handlePressOpt4 = () => {
    setOpt4(true);
    if (arrIndex < stack.length) {
      setArrIndex(arrIndex + 1);
    }
  };

  const handleZeroPress = () => {
    setZero(true);
  };
  const handleOnePress = () => {
    setOne(true);
  };
  const handleTwoPress = () => {
    setTwo(true);
  };
  const handleThreePress = () => {
    setThree(true);
  };

  const arr = [
    'Microsoft',
    'Word',
    'is',
    'a',
    'word',
    'processor',
    'developed',
    'by',
    'microsoft.',
    'It',
    'was',
    'first',
    'released',
    'on',
    'october',
    '25',
    '1983.',
  ];

  useEffect(() => {}, []);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://cdn.pixabay.com/photo/2015/09/09/17/20/argyle-931990_640.jpg',
      }}>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              width: '100%',
              backgroundColor: 'blue',
              padding: 15,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>
              Color Changer
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '90%',
              margin: 20,
              padding: 5,
            }}>
            {/* zero */}
            <Pressable
              onPress={handleZeroPress}
              style={[
                styles.pressableWord,
                {
                  backgroundColor: zero ? stack[arrIndex] : '#9BABB8',
                  margin: 2,
                  padding: 8,
                },
              ]}>
              <Text>Microsoft</Text>
            </Pressable>

            {/* one */}
            <Pressable
              onPress={handleOnePress}
              style={[
                styles.pressableWord,
                {
                  backgroundColor: one ? stack[arrIndex] : '#9BABB8',
                  margin: 2,
                  padding: 8,
                },
              ]}>
              <Text>Word</Text>
            </Pressable>

            {/* two */}
            <Pressable
              onPress={handleTwoPress}
              style={[
                styles.pressableWord,
                {
                  backgroundColor: two ? stack[arrIndex] : '#9BABB8',
                  margin: 2,
                  padding: 8,
                },
              ]}>
              <Text>is</Text>
            </Pressable>

            {/* three */}
            <Pressable
              onPress={handleThreePress}
              style={[
                styles.pressableWord,
                {
                  backgroundColor: three ? stack[arrIndex] : '#9BABB8',
                  margin: 2,
                  padding: 8,
                },
              ]}>
              <Text>a</Text>
            </Pressable>
          </View>

          <View style={styles.buttonView}>
            <Pressable
              disabled={opt1}
              style={[
                styles.pressableButton,
                {backgroundColor: opt1 ? stack[arrIndex] : '#EAEAEA'},
              ]}
              onPress={handlePressOpt1}>
              <Text style={styles.buttonText}>1</Text>
            </Pressable>
            <Pressable
              disabled={opt2}
              style={[
                styles.pressableButton,
                {backgroundColor: opt2 ? stack[arrIndex] : '#EAEAEA'},
              ]}
              onPress={handlePressOpt2}>
              <Text style={styles.buttonText}>2</Text>
            </Pressable>
            <Pressable
              disabled={opt3}
              style={[
                styles.pressableButton,
                {backgroundColor: opt3 ? stack[arrIndex] : '#EAEAEA'},
              ]}
              onPress={handlePressOpt3}>
              <Text style={styles.buttonText}>3</Text>
            </Pressable>
            <Pressable
              disabled={opt4}
              style={[
                styles.pressableButton,
                {backgroundColor: opt4 ? stack[arrIndex] : '#EAEAEA'},
              ]}
              onPress={handlePressOpt4}>
              <Text style={styles.buttonText}>4</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Sample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },
  pressableButton: {
    justifyContent: 'flex-start',
    marginBottom: 15,
    color: 'grey',
    // backgroundColor: '#EAEAEA',
    borderRadius: 50,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
    borderColor: '#080202',
    borderWidth: 1,
  },
  pressableWord: {
    borderRadius: 10,
  },
  buttonView: {
    margin: 10,
    backgroundColor: '#EAEAEA',
    width: '90%',
    borderRadius: 15,
    padding: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});

/**
 *
 * onClick => if(index == 1)
 *
 */
