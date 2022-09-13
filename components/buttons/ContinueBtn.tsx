import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralBtn from './GeneralBtn';
import { useNavigation } from '@react-navigation/native';

interface ButtonProps {
    btnColor?: boolean
    ScreenNav: string
}

const ContinueBtn: React.FC<ButtonProps> = ({ btnColor, ScreenNav }) => {
    const navigation = useNavigation();
    return (
        <View className='absolute bottom-10 w-full z-50'>
            <TouchableOpacity
                // onPress={() => navigation.navigate("Basket")}
                className={`${btnColor ? 'bg-[#000] border-[2px] border-[#fff]' : 'bg-[#fff] border-[2px] border-[#000]'} mx-5  p-4 rounded-[15px] flex-row items-center space-x-1`}
                onPress={() => navigation?.navigate(ScreenNav)}
            >
                <Text className={`${btnColor ? ' text-[#fff]' : 'text-[#000]'} flex-1 font-extrabold text-lg text-center`}>Continue</Text>
            </TouchableOpacity>
        </View >
    );
}

export default ContinueBtn;