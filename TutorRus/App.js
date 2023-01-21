import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { Linking } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import SeeAllFlatList from './components/SeeAllFlatList';
import ScrollList from './components/ScreenList';

import Cameras from './components/Cameras';
import SubjectList from "./components/SubjectList";



const API_URL = 'https://whizexplore.herokuapp.com/api';

// const titleRegex = /<title>(.*?)<\/title>/;
const metaRegex = /<meta.*?content=['"](.*?)['"].*?>/;

export default function App () {

  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');





  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const togglesModal = () => {
    setModalVisible(!modalVisible);
  };

  const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  // const links = result.match(linkRegex);
  const titleRegex = new RegExp("(title)(/s)(:)(/s)(.*)(/n)");
  const titleRegexResult = links ? result.match(titleRegex) : null;


  const [links, setLinks] = useState([]);
  const [title, setTitles] = useState([]);

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    try {
      // Fetch data from the API
      const response = await fetch(`${API_URL}/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({subject, question}),
      });
      const data = await response.json();
      const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
      const links = data.result.match(linkRegex);
      const titleRegex = /title : "(.*)"/g;
      const title = data.result.match(titleRegex);
      setLinks(links);
      setTitles(title);
      // Set the result variable
      setResult(`${question}\n\n${data.result}`);
    } catch (e) {
      Alert.alert("Couldn't generate ideas", e.message);
    } finally {
      setLoading(false);
    };
  }




  if (loading) {
    return (
        <View style={styles.loadingContainer}>
          <Text style={styles.textLoading}>Whiz is thinking 🧠</Text>

          <Image style={styles.loading} source={require('./loading.gif')} />
        </View>
    );
  }



  const onTryAgain = () => {
    setResult('');
  };

  if (modalVisible) {
    return (

        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={togglesModal}
        >
          <View style={styles.modalContent}>
            {/*<Cameras/>*/}
            <Text>This is the content of the modal</Text>
            <SeeAllFlatList/>

            <Pressable onPress={togglesModal} style={styles.buttonRight}>
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
          </View>
        </Modal>
    );
  }





  return (

      <View style={styles.container}>

        {/*<Text style={styles.label}>For who is the gift?</Text>*/}
        {/*<View style={styles.selectorContainer}>*/}
        {/*  <Text style={styles.selector}>Man</Text>*/}
        {/*  <Text style={styles.selector}>Woman</Text>*/}
        {/*</View>*/}
        <View style={styles.labels}>
          <Text style={styles.labelWhiz}>WHIZ EXPLORE</Text>
          <TouchableOpacity style={styles.labelsright}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <FontAwesome name="connectdevelop" size={24} color="black" />
          </TouchableOpacity>
        </View>




        <View style={styles.searchSection}>

          <TextInput
              placeholder="Type your question here"
              rightIcon={<AntDesign name="camera" size={24} color="black" />}
              keyboardType="alphabetical"
              style={styles.input}
              value={question.toString()}
              onChangeText={setQuestion}

          />
          <Pressable
              style={styles.buttonRight}
              onPress={() => {
                navigation.navigate('HelloWorld');
              }}
          >
            <AntDesign style={styles.searchIcon} name="camera" size={24} color="black" />
          </Pressable>


        </View>


        <View style={styles.labels}>
          <Text style={styles.label}>Search Subject</Text>
          <Pressable onPress={toggleModal} style={styles.buttonRight}>
            <Text style={styles.buttonText}>See All</Text>
          </Pressable>
        </View>
        <View style={styles.viewContainer}>
          <SubjectList/>
          <View style={styles.resultContainers}>

            {result && (
                <ScrollView style={styles.resultsContainers}>
                  <Text style={styles.linkTitle}>{result}</Text>
                  {links.map((link, index) => {
                    const titleRegexResult = result ? result.match(titleRegex) : null;
                    const titles = titleRegexResult ? titleRegexResult[1] : '';

                    return (

                        <Pressable>
                          {links.map((link,index) => (
                              <View key={index}>
                                <Pressable onPress={() => Linking.openURL(link)}>
                                  <Text>Link: {link}</Text>
                                  <Text>Title: {titles[index]}</Text>
                                </Pressable>
                              </View>
                          ))}
                        </Pressable>


                    );

                  })}
                </ScrollView>

            )}

          </View>
        </View>
        <Pressable onPress={onSubmit} style={styles.button}>
          <Text style={styles.buttonText}>SEARCH WHIZ</Text>

        </Pressable>




      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:30
  },
  input: {
    fontSize: 16,
    borderColor: "#353740;",
    borderWidth: 1,
    borderRadius: 20,
    width: '100%',

    padding: 16,
    marginTop: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
    marginLeft:10,
    backgroundColor: "blue",
    alignItems: "center",


  },
  link: {
    fontSize: 16,
    color: '#0000EE',
    backgroundColor: 'yellow'
  },
  description: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'blue'
  },
  title: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'green'
  },
  labels: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    width: "95%",
    height: 15,
    justifyContent: "space-between",
    alignItems: "center"

  },
  labelClose: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center"

  },
  modalTitleContainer: {
    height: "100%",
  },
  labelWhiz: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    width: "100%",



  },
  labelsright: {
    fontSize: 12,
    color: "blue",
    fontWeight: "light",
    flexDirection: "row",
    justifyContent: "flex-end",
    right: 7,
    position: "absolute",


  },
  linkContainer: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  linkDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,

  },
  linkUrl: {
    fontSize: 14,
    color: 'blue',
  },

  resultContainers: {
    padding: 6,

    borderColor: "lightgrey",
    height: "75%",
    width: "100%",

  },

  selectorContainer: {
    flexDirection: "row",
  },
  selector: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "gainsboro",
    margin: 5,
    padding: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  button: {
    marginTop: "auto",
    backgroundColor: "#10a37f",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 6,

  },
  buttonRight: {
    marginTop: 1,
    textColor: "red",
    color: "red",
    fontWeight: "light",
    flexDirection: "row",
    justifyContent: "flex-end",

  },
  subjectButton: {
    marginTop: "auto",
    backgroundColor: "blue",
    borderWeight: "2",
    borderColor: "black",
    padding: 16,
    borderRadius: 100,
    alignItems: "center",
    marginVertical: 6,
  },
  buttonText: {
    color: "black",
    fontWeight: "bold",

  },
  loadingContainer: {
    alignItems: "center",
    height: '100%',
    justifyContent: "center",
    backgroundColor: "#018CDD",
    padding: 5,
    fontColor: "white",

  },
  barContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#018CDD",
    padding: 10,
    fontColor: "white",
    width: "100%",
  },
  loading: {
    width: "100%",
    alignItems: "center",
    alignContent: "center",
  },
  icons: {
    width: 50,
    height: 50,
    backgroundColor: "#018CDD",
    borderRadius: 20,
    borderWidth: 2,

  },
  loadingContainers: {
    flex: 1,
    flexDirection: "row",
    marginTop: 1,
    backgroundColor: 'blue',






  },
  resultsContainers: {
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "lightgrey",
    height: "75%",
    width: "100%",




  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10
  },
  searchIcon: {
    padding: 10,
  },
  titleLoading: {
    fontColor: "white",
  },
  picker: {
    flex: 1,
    width: 200,
    height: 44,
    marginTop: 20,
  },
  iconContainer: {
    alignItems: "center",
    marginLeft: 15,


  },
  viewContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",


  },
  textLoading: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  answer: {
    color: "black",
    fontWeight: "bold",
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",

  },
  modalContent: {
    flex: 1,
  },

});
