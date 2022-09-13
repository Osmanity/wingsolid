import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { logout } from '../../features/login/loginSlice'
import { useDispatch } from 'react-redux'

interface ButtonProps {
    btnColor?: boolean
    btnText?: string
}

const LogoutBtn: React.FC<ButtonProps> = ({ btnColor, btnText }) => {
    const dispatch = useDispatch()
    return (
        <View className='w-full mt-5'>
            <TouchableOpacity
                // onPress={() => navigation.navigate("Basket")}
                className={`${btnColor ? 'bg-[#000] border-[2px] border-[#fff]' : 'bg-[#fff] border-[2px] border-[#000]'} mx-5  p-4 rounded-[15px] flex-row items-center space-x-1`}
                onPress={() => dispatch(logout())}
            >
                <Text className={`${btnColor ? ' text-[#fff]' : 'text-[#000]'} flex-1 font-extrabold text-lg text-center`}>{btnText}</Text>
            </TouchableOpacity>
        </View >
    );
}

export default LogoutBtn