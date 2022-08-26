import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import GeneralBtn from './GeneralBtn'
import ContinueBtn from './ContinueBtn'

const MultiButtons = () => {
    return (
        <View style={styles.container}>
            <GeneralBtn btnColor={false} btnText={'Login'} />
            <GeneralBtn btnColor={true} btnText={'SignUp'} />
            <Text clasName={`text-[#000]`} >hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        marginTop: 100,
        backgroundColor: '#000',
        position: 'absolut',
        bottom: 100,

    },
});

export default MultiButtons