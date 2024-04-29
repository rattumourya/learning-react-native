import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, } from "react-native"


export default function GaolInput({ onGoalAddHandler, visible, onCancel }) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function onGoalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoal() {
        onGoalAddHandler(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal'
                    onChangeText={onGoalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoal} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
        marginBottom: 24,
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: 
    {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        width: "30%",
        marginHorizontal: 8
    }
})