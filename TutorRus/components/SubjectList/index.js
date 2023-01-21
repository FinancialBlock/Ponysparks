import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';



const API_URL = 'http://localhost:3001.com/api';


export default function SubjectList() {

const [subject, setSubject] = useState('');
const [question, setQuestion] = useState('');
const [loading, setLoading] = useState(false);
const [result, setResult] = useState('');
const [modalVisible, setModalVisible] = useState(false);
const [selectedSubject, setSelectedSubject] = useState('');


    return (
        <View style={styles.container}>

            <ScrollView horizontal={true} style={styles.loadingContainers}
                        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => {
                        setSubject('math, Algebra 1, finance, accounting, options calls and puts, Algebra 2, Calculus, Computer math, Consumer math, Fundamentals of math, Geometry, Integrated math, Math applications, Multivariable calculus, Practical math, Pre-algebra, Pre-calculus, Probability, Quantitative literacy, Statistics, Trigonometry');
                        setSelectedSubject('math');
                    }}
                    style={[styles.iconContainer, selectedSubject === "math" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../maths.png')} />
                    <Text>Math</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSubject('history, Cultural anthropology, Current events ,European history ,Geography, Global studies, Human geography, International relationsLaw, Macroeconomics, Microeconomics, Modern world studies, Physical anthropology, Political studies, Psychology, Religious studies, Sociology. US government, US history, Women\'s studies, World history, World politics, World religions\n ');
                        setSelectedSubject('history');
                    }}
                    style={[styles.iconContainer, selectedSubject === "history" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../history-book.png')} />
                    <Text>History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {setSubject('coding, javascript, typescript, react-native, react, python, developing\n ');
                        setSelectedSubject('coding');
                    }}
                    style={[styles.iconContainer, selectedSubject === "coding" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../nursing.png')} />
                    <Text>Nursing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {setSubject('Anatomy, Physiology, Chemistry, Biochemistry , Psychology, Developmental , Psychology ,Microbiology\n ');
                        setSelectedSubject('Anatomy');
                    }}
                    style={[styles.iconContainer, selectedSubject === "Anatomy" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../math.png')} />
                    <Text>Coding</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSubject('english, American literature, British literature, Contemporary literature, Creative writing, Communication skills, Debate, English language and composition, English literature and composition, Humanities, Journalism, Literary analysis, Modern literature, Poetry, Popular literature, Rhetoric, Technical writing, Works of Shakespeare, World literature, Written and oral communication');
                        setSelectedSubject('english');
                    }}
                    style={[styles.iconContainer, selectedSubject === "english" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../literature.png')} />
                    <Text>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSubject('business');
                        setSelectedSubject('business');
                    }}
                    style={[styles.iconContainer, selectedSubject === "business" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../portfolio.png')} />
                    <Text>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { setSubject('science, Anatomy, Agriculture, Astronomy, Biology, Botany, Chemistry, Earth science, Electronics, Environmental science, Environmental studies, Forensic science, Geology , Marine biology, Oceanography, Physical science, Physics, Zoology ');
                        setSelectedSubject('science');
                    }}
                    style={[styles.iconContainer, selectedSubject === "science" && { backgroundColor: "#10a37f" },]}
                >
                    <Image style={styles.icons} source={require('../../atom.png')} />
                    <Text>Science</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 90,
        width: Dimensions.get("window").width,
        backgroundColor: "white",
        marginVertical: 10,
        padding: 10,
        borderWidth: .5,

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
    barContainer: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#018CDD",
        padding: 10,
        fontColor: "white",
        width: "100%",
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
        height: 50,

    },
    resultsContainers: {
        padding: 10,
        marginTop: 5,
        borderWidth: 1,
        borderColor: "lightgrey",
        height: "75%",
        width: "100%",
        backgroundColor: "red",
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
});