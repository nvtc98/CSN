import React, { memo } from "react";
import { useLogin } from "screens/Login/Util";
import { Text, View } from "react-native";
import { color } from "common/constants";
import { scale } from "common/utilities";
import CButton from "common/components/CButton";
import { ActivityIndicator } from "react-native-paper";

// Components
import CLoginTextInput from './CLoginTextInput'

const CLoginContainer = () => {
	const { onLogin, onChangeText, errorMessage, loading } = useLogin();
	return (
		<>
			<CLoginTextInput
				icon="mail"
				onChangeText={(value: string) => onChangeText('username', value)}
			/>
			<CLoginTextInput
				icon="lock1"
				type="password"
				onChangeText={(value: string) => onChangeText('password', value)}
			/>

			<View>
				<Text
					style={{
						color: color.alert,
						fontSize: scale(10),
						position: 'absolute',
						top: scale(8),
						left: 0,
						right: 0,
						textAlign: 'center',
					}}>
					{errorMessage}
				</Text>
				<CButton
					style={{
						width: scale(200),
						height: scale(40),
						backgroundColor: color.primary,
						borderRadius: scale(20),
						marginTop: scale(30),
					}}
					onPress={onLogin}>
					{loading ? (
						<ActivityIndicator color={color.primaryGradient} />
					) : (
						<Text style={{ color: '#FFF', fontWeight: 'bold' }}>Login</Text>
					)}
				</CButton>
			</View>
		</>
	);
};

export default memo(CLoginContainer);
