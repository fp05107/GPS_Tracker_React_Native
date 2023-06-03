import {Pressable, StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

const Demo = () => {
  const stack = ['red', 'blue', 'orange', 'tomato'];
  const [myIndex, setMyIndex] = useState(0);
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

  //   const obj = {
  //     0: 'red',
  //     1: 'red',
  //     2: 'green',
  //   };

  const [flag, setFlag] = useState(false);

  const [obj, setObj] = useState({});
  const [obj_2, setobj_2] = useState({});

  const handleWordPress = index => {
    setFlag(true);
    let str = Number(index);
    console.log(typeof str + ' ' + str + ' clicked');
    if (obj.str === undefined) {
      const updatedObj = {...obj};
      updatedObj[str] = stack[myIndex];
      setObj(updatedObj);
    }
    console.log(obj);
  };

  function handleOptionPress(option) {
    if (!flag) {
    } else {
      if (obj_2[option] === undefined) {
        const updatedObj2 = {...obj_2, [option]: stack[myIndex]};
        console.log(updatedObj2);
        setobj_2(updatedObj2);
      }
      setMyIndex(myIndex + 1);
    }
    setFlag(false);
  }

  console.log('Obj2 ' + obj_2);

  useEffect(() => {}, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '90%',
            margin: 20,
            padding: 5,
          }}>
          {arr.map((el, index) => (
            <Pressable
              key={index}
              style={{
                backgroundColor: obj[index] !== undefined ? obj[index] : 'gray',
                margin: 2,
                padding: 8,
                borderRadius: 10,
              }}
              disabled={obj[index] !== undefined}
              onPress={() => handleWordPress(index)}>
              <Text>{el} </Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.buttonView}>
          <Pressable
            style={[
              styles.pressableButton,
              {backgroundColor: obj_2.opt1 !== undefined ? obj_2.opt1 : 'gray'},
            ]}
            disabled={obj_2.opt1 !== undefined}
            onPress={() => handleOptionPress('opt1')}>
            <Text>1</Text>
          </Pressable>

          <Pressable
            style={[
              styles.pressableButton,
              {backgroundColor: obj_2.opt2 != undefined ? obj_2.opt2 : 'gray'},
            ]}
            disabled={obj_2.opt2 !== undefined}
            onPress={() => handleOptionPress('opt2')}>
            <Text>2</Text>
          </Pressable>
          <Pressable
            style={[
              styles.pressableButton,
              {backgroundColor: obj_2.opt3 != undefined ? obj_2.opt3 : 'gray'},
            ]}
            disabled={obj_2.opt3 !== undefined}
            onPress={() => handleOptionPress('opt3')}>
            <Text>3</Text>
          </Pressable>
          <Pressable
            style={[
              styles.pressableButton,
              {backgroundColor: obj_2.opt4 != undefined ? obj_2.opt4 : 'gray'},
            ]}
            disabled={obj_2.opt4 !== undefined}
            onPress={() => handleOptionPress('opt4')}>
            <Text>4</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Demo;

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
