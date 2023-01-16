import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import Cameras from "../components/Cameras";
import {
    View,
    Text,
    Alert,
    Image,
    Modal,
    Pressable,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Linking, StyleSheet
} from "react-native";
import HelloWorld from "../components/HelloWorld";
import {AntDesign, FontAwesome, Ionicons} from "@expo/vector-icons";


function HomeScreen() {
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
    const links = result.match(linkRegex);



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
                body: JSON.stringify({ subject, question }),
            });
            const data = await response.json();

            // Set the title and description variables

            const metaRegexResult = data.result ? data.result.match(metaRegex) : null;
            const description = metaRegexResult ? metaRegexResult[1] : '';


            // Set the result variable
            setResult(`${question}\n\n${data.result}`);
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
                    <View style={styles.modalTitleContainer}>
                        <Cameras/>
                    </View>
                    <Text>This is the content of the modal</Text>
                    <HelloWorld/>

                    <Pressable onPress={toggleModal} style={styles.buttonRight}>
                        <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }
    if (modalVisible) {
        return (

            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={togglesModal}
            >
                <View style={styles.modalContent}>
                    <Cameras/>
                    <Text>This is the content of the modal</Text>
                    <HelloWorld/>

                    <Pressable onPress={togglesModal} style={styles.buttonRight}>
                        <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
        );
    }





    return (

        <View style={styles.container}>
            <View style={styles.labels}>
                <Text style={styles.labelWhiz}>WHIZ</Text>
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
                <Pressable  style={styles.buttonRight}>
                    <AntDesign style={styles.searchIcon} name="camera" size={24} color="black" />
                </Pressable>

            </View>

            {/*<View style={styles.searchSection}>*/}

            {/*  <TextInput*/}
            {/*      style={styles.input}*/}
            {/*      placeholder="User Nickname"*/}
            {/*      onChangeText={(searchString) => {this.setState({searchString})}}*/}
            {/*      underlineColorAndroid="transparent"*/}
            {/*  />*/}
            {/*  <AntDesign style={styles.icons} name="search1" size={24} color="black"  />*/}

            {/*</View>*/}

            <TextInput
                placeholder="Type your question here"
                leftIcon={<AntDesign name="search1" size={24} color="black" />}
                rightIcon={<AntDesign name="camera" size={24} color="black" />}
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
                        <Image style={styles.icons} source={require('./nursing.png')} />
                        <Text>Nursing</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setSubject('Anatomy, Physiology, Chemistry, Biochemistry , Psychology, Developmental , Psychology ,Microbiology\n ')}
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
                {/*{result && (*/}
                {/*    <ScrollView style={styles.resultsContainers}>*/}
                {/*      {links.map((link, index) => (*/}
                {/*          <Pressable key={index} onPress={() => Linking.openURL(link)}>*/}
                {/*            <Text style={styles.link}>{title}</Text>*/}
                {/*            <Text style={styles.description}>{description}</Text>*/}
                {/*            <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*          </Pressable>*/}
                {/*      ))}*/}
                {/*    </ScrollView>*/}
                {/*)}*/}
                {/*<ScrollView style={styles.resultsContainers}>*/}
                {/*  <Text style={styles.result}>{result}</Text>*/}
                {/*  <Text style={styles.result}>{result}</Text>*/}
                {/*</ScrollView>*/}

                {/*  {result && (*/}
                {/*      <ScrollView style={styles.resultsContainers}>*/}
                {/*        {links.map((link, index) => (*/}
                {/*            <Pressable key={index} onPress={() => Linking.openURL(link)}>*/}

                {/*              <Text style={styles.link}>{result}</Text>*/}
                {/*              <Text style={styles.question}>{result.split('\n\n')[2]}</Text>*/}
                {/*              <Text style={styles.question}>{result.split('\n\n')[3]}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}
                {/*              <Text style={[styles.link, { color: 'blue' }]}>{link}</Text>*/}


                {/*            </Pressable>*/}
                {/*        ))}*/}
                {/*      </ScrollView>*/}
                {/*  )}*/}
                {result && (
                    <ScrollView style={styles.resultsContainers}>
                        <Text style={styles.linkTitle}>{result}</Text>
                        {links.map((link, index) => {
                            const titleRegexResult = result ? result.match(titleRegex) : null;
                            const title = titleRegexResult ? titleRegexResult[1] : '';

                            const metaRegexResult = result ? result.match(metaRegex) : null;
                            const description = metaRegexResult ? metaRegexResult[1] : '';
                            const linkList = links.map((link, title, description, index) => {
                                return {
                                    title: title,
                                    description: description,
                                    link: link
                                };
                            });

                            return (

                                <Pressable key={index} onPress={() => Linking.openURL(link)}>

                                    {linkList.map((link, index) => (
                                        <View key={index} style={styles.linkContainer}>
                                            <Text style={styles.linkTitle}>{link.title}</Text>
                                            <Text style={styles.linkDescription}>{link.description}</Text>
                                            <TouchableOpacity onPress={() => Linking.openURL(link.link)}>
                                                <Text style={styles.linkUrl}>{link.link}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                                </Pressable>

                            );
                        })}
                    </ScrollView>
                )}

                {/*{result && (*/}
                {/*    <ScrollView style={styles.resultsContainers}>*/}
                {/*      <Text style={styles.question}>{question}</Text>*/}
                {/*      <Text style={styles.answer}>{result.split('\n\n')[1]}</Text>*/}
                {/*      <Text style={styles.question}>{result.split('\n\n')[2]}</Text>*/}
                {/*      <Text style={styles.question}>{result.split('\n\n')[3]}</Text>*/}
                {/*    </ScrollView>*/}
                {/*)}*/}


                {/*<Text style={[styles.result, {fontWeight: 'bold'}]}>{result.url}</Text>*/}




            </View>
            <Pressable onPress={onSubmit} style={styles.button}>
                <Text style={styles.buttonText}>SEARCH WHIZ</Text>
            </Pressable>




        </View>
    )}


export default HomeScreen;



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
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        marginLeft:10,
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

});

