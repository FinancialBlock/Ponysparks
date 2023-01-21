import React, {useState} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';



const API_URL = 'http://localhost:3000/api';


export default function HelloWorld() {

const [subject, setSubject] = useState('');
const [question, setQuestion] = useState('');
const [loading, setLoading] = useState(false);
const [result, setResult] = useState('');
const [modalVisible, setModalVisible] = useState(false);

    const screenWidth = Dimensions.get('window').width;
    const numColumns = screenWidth > 600 ? 3 : 2;
    const DATA = [
        {
            id: 1,
            name: 'Math',
            image: require('../../maths.png'),
            onPress: () => setSubject('math, Algebra 1, Algebra 2, Calculus, Computer math, Consumer math, Fundamentals of math, Geometry, Integrated math, Math applications, Multivariable calculus, Practical math, Pre-algebra, Pre-calculus, Probability, Quantitative literacy, Statistics, Trigonometry')
        },
        {
            id: 2,
            name: 'History',
            image: require('../../history-book.png'),
            onPress: () => setSubject('history, Cultural anthropology, Current events ,European history ,Geography, Global studies, Human geography, International relationsLaw, Macroeconomics, Microeconomics, Modern world studies, Physical anthropology, Political studies, Psychology, Religious studies, Sociology. US government, US history, Women\'s studies, World history, World politics, World religions\n ')
        },
        {
            id: 3,
            name: 'Coding',
            image: require('../../math.png'),
            onPress: () => setSubject('coding, javascript, typescript, react-native, react, python, developing\n ')
        },
        {
            id: 4,
            name: 'English',
            image: require('../../literature.png'),
            onPress: () => setSubject('english, American literature, British literature, Contemporary literature, Creative writing, Communication skills, Debate, English language and composition, English literature and composition, Humanities, Journalism, Literary analysis, Modern literature, Poetry, Popular literature, Rhetoric, Technical writing, Works of Shakespeare, World literature, Written and oral communication')
        },
        {
            id: 5,
            name: 'Business',
            image: require('../../portfolio.png'),
            onPress: () => setSubject('business')
        },
        {
            id: 6,
            name: 'Science',
            image: require('../../atom.png'),
            onPress: () => setSubject('science, Anatomy, Agriculture, Astronomy, Biology, Botany, Chemistry, Earth science, Electronics, Environmental science, Environmental studies, Forensic science, Geology , Marine biology, Oceanography, Physical science, Physics, Zoology ')
        }
    ];

    const Item = ({name}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{name}</Text>
        </View>
    );


    return (
        <View style={styles.container}>

            <FlatList
                data={DATA}
                horizontal={false}
                numColumns={2}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={item.onPress} style={styles.iconContainer}>
                        <Image style={styles.icons} source={item.image} />
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={{
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            />
            <Text> wiecvwno;vslad;ouvlsd;oclad</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'green',
        alignItems: 'center',
        marginTop:30
    },
    iconContainer: {
        alignItems: 'center',
        width: '40%',
        height: '40%',
        margin: '5%',
    },
    icons: {
        width: '100%',
        height: '100%'
    },
});