import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const API_URL = 'http://localhost:3000/api';

function Picker(props) {
    return null;
}
export default function HelloWorld() {

const [subject, setSubject] = useState('');
const [question, setQuestion] = useState('');
const [loading, setLoading] = useState(false);
const [result, setResult] = useState('');
const [modalVisible, setModalVisible] = useState(false);


    return (
        <View style={styles.viewContainer}>

            <ScrollView horizontal={true} numColumns={5} style={styles.loadingContainers}
                        contentContainerStyle={{ justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={() => setSubject('math, Algebra 1, Algebra 2, Calculus, Computer math, Consumer math, Fundamentals of math, Geometry, Integrated math, Math applications, Multivariable calculus, Practical math, Pre-algebra, Pre-calculus, Probability, Quantitative literacy, Statistics, Trigonometry')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../maths.png')} />
                    <Text>Math</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('history, Cultural anthropology, Current events ,European history ,Geography, Global studies, Human geography, International relationsLaw, Macroeconomics, Microeconomics, Modern world studies, Physical anthropology, Political studies, Psychology, Religious studies, Sociology. US government, US history, Women\'s studies, World history, World politics, World religions\n ')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../history-book.png')} />
                    <Text>History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('coding, javascript, typescript, react-native, react, python, developing\n ')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../math.png')} />
                    <Text>Coding</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('english, American literature, British literature, Contemporary literature, Creative writing, Communication skills, Debate, English language and composition, English literature and composition, Humanities, Journalism, Literary analysis, Modern literature, Poetry, Popular literature, Rhetoric, Technical writing, Works of Shakespeare, World literature, Written and oral communication')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../literature.png')} />
                    <Text>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('business')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../portfolio.png')} />
                    <Text>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('science, Anatomy, Agriculture, Astronomy, Biology, Botany, Chemistry, Earth science, Electronics, Environmental science, Environmental studies, Forensic science, Geology , Marine biology, Oceanography, Physical science, Physics, Zoology ')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../atom.png')} />
                    <Text>Science</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('math, Algebra 1, Algebra 2, Calculus, Computer math, Consumer math, Fundamentals of math, Geometry, Integrated math, Math applications, Multivariable calculus, Practical math, Pre-algebra, Pre-calculus, Probability, Quantitative literacy, Statistics, Trigonometry')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../maths.png')} />
                    <Text>Math</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('history, Cultural anthropology, Current events ,European history ,Geography, Global studies, Human geography, International relationsLaw, Macroeconomics, Microeconomics, Modern world studies, Physical anthropology, Political studies, Psychology, Religious studies, Sociology. US government, US history, Women\'s studies, World history, World politics, World religions\n ')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../history-book.png')} />
                    <Text>History</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('coding, javascript, typescript, react-native, react, python, developing\n ')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../math.png')} />
                    <Text>Coding</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('english, American literature, British literature, Contemporary literature, Creative writing, Communication skills, Debate, English language and composition, English literature and composition, Humanities, Journalism, Literary analysis, Modern literature, Poetry, Popular literature, Rhetoric, Technical writing, Works of Shakespeare, World literature, Written and oral communication')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../literature.png')} />
                    <Text>English</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('business')}
                    style={styles.iconContainer}
                >
                    <Image style={styles.icons} source={require('../../portfolio.png')} />
                    <Text>Business</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSubject('science, Anatomy, Agriculture, Astronomy, Biology, Botany, Chemistry, Earth science, Electronics, Environmental science, Environmental studies, Forensic science, Geology , Marine biology, Oceanography, Physical science, Physics, Zoology ')}
                    style={styles.iconContainer}
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
        width: "100%",

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
        color: "white",
        fontWeight: "bold",
    },
    loadingContainer: {
        alignItems: "center",
        height: '75' +
            '%',
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

        marginTop: 12,
        backgroundColor: "#018CDD",
        width: "100%",






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
