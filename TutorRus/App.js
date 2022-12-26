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
import HelloWorld from './components/HelloWorld';

const API_URL = 'https://ponysparks-2afu.vercel.app/pages/api';


export default function App() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setResult('');
    try {
      const response = await fetch(`${API_URL}/question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, question }),
      });
      const data = await response.json();
      setResult(data.result);
    } catch (e) {
      Alert.alert("Couldn't generate ideas", e.message);
    } finally {
      setLoading(false);
    }
  };

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
      onRequestClose={toggleModal}
  >
      <View style={styles.modalContent}>
          <Text>This is the content of the modal</Text>
        <HelloWorld/>
          <Pressable onPress={toggleModal} style={styles.buttonRight}>
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
      <Text style={styles.labelWhiz}>WHIZ</Text>
        <TouchableOpacity style={styles.labelsright}>
         <Ionicons name="notifications-outline" size={24} color="black" />
          <FontAwesome name="connectdevelop" size={24} color="black" />
        </TouchableOpacity>
      </View>






      <TextInput
          placeholder="Type your question here"
          leftIcon={<AntDesign name="search1" size={24} color="black" />}
          keyboardType="alphabetical"
          style={styles.input}
          value={question.toString()}
          onChangeText={setQuestion}

      />

      <View style={styles.labels}>
            <Text style={styles.label}>Search Subject</Text>


        <Pressable onPress={toggleModal} style={styles.buttonRight}>
          <Text style={styles.buttonText}>See All</Text>
        </Pressable>
      </View>
      <View style={styles.viewContainer}>

      <ScrollView horizontal={true} style={styles.loadingContainers}
                  contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
            onPress={() => setSubject('math, Algebra 1, finance, accounting, options calls and puts, Algebra 2, Calculus, Computer math, Consumer math, Fundamentals of math, Geometry, Integrated math, Math applications, Multivariable calculus, Practical math, Pre-algebra, Pre-calculus, Probability, Quantitative literacy, Statistics, Trigonometry')}
            style={[styles.iconContainer, Math === "math" && { backgroundColor: "#10a37f" },]}
        >
          <Image style={styles.icons} source={require('./maths.png')} />
          <Text>Math</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setSubject('history, Cultural anthropology, Current events ,European history ,Geography, Global studies, Human geography, International relationsLaw, Macroeconomics, Microeconomics, Modern world studies, Physical anthropology, Political studies, Psychology, Religious studies, Sociology. US government, US history, Women\'s studies, World history, World politics, World religions\n ')}
            style={styles.iconContainer}
        >
          <Image style={styles.icons} source={require('./history-book.png')} />
          <Text>History</Text>
        </TouchableOpacity>
          <TouchableOpacity
              onPress={() => setSubject('coding, javascript, typescript, react-native, react, python, developing\n ')}
              style={styles.iconContainer}
          >
            <Image style={styles.icons} source={require('./history-book.png')} />
            <Text>Story</Text>
          </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setSubject('you are the worlds best author and create stories that truly touch peoples heart. You are an expert at making stories, novels, poems, english, literature, journals, diaries and pictures\n ')}
            style={styles.iconContainer}
        >
            <Image style={styles.icons} source={require('./math.png')} />
            <Text>Coding</Text>
          </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setSubject('english, American literature, British literature, Contemporary literature, Creative writing, Communication skills, Debate, English language and composition, English literature and composition, Humanities, Journalism, Literary analysis, Modern literature, Poetry, Popular literature, Rhetoric, Technical writing, Works of Shakespeare, World literature, Written and oral communication')}
            style={styles.iconContainer}
        >
          <Image style={styles.icons} source={require('./literature.png')} />
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setSubject('business')}
            style={styles.iconContainer}
        >
          <Image style={styles.icons} source={require('./portfolio.png')} />
          <Text>Business</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => setSubject('science, Anatomy, Agriculture, Astronomy, Biology, Botany, Chemistry, Earth science, Electronics, Environmental science, Environmental studies, Forensic science, Geology , Marine biology, Oceanography, Physical science, Physics, Zoology ')}
            style={styles.iconContainer}
        >
          <Image style={styles.icons} source={require('./atom.png')} />
          <Text>Science</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView style={styles.resultsContainers}>
        <Text style={styles.result}>{result}</Text>
        <Text style={styles.result}>{result}</Text>
      </ScrollView>

        {/*<Text style={[styles.result, {fontWeight: 'bold'}]}>{result.url}</Text>*/}




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
    width: '80%',

    padding: 16,
    marginTop: 10,
    marginBottom: 12,
  },
  label: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginLeft:10,
    alignItems: "center",


  },
  labels: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    width: "95%",
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
    marginTop: "auto",
    padding: 16,
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
    padding: 10,
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
    marginTop: 12,






  },
  resultsContainers: {
    padding: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    height: "75%",
    width: "95%",



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
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",

  },

});
