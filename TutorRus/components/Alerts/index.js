import {Button, Modal, View, StyleSheet, Text} from 'react-native';
import {useState} from "react";


export default function Alerts() {
    const [modalVisible, setModalVisible] = useState(false);

    function handleNotification() {
        // Show the notification modal when a notification is received
        setModalVisible(true);
    }

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.notificationContainer}>
                <Text style={styles.notificationText}>You have a new notification!</Text>
                <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    notificationContainer: {
        backgroundColor: 'green',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    notificationText: {
        fontSize: 16,
        color: '#333',
    },
    notificationHeader: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    notificationTimestamp: {
        fontSize: 14,
        color: '#999',
    },
});