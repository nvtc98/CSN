import React, { memo } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Common
import { color, commonStyles } from "common/constants";
import { scale } from "common/utilities";
import CButton from "common/components/CButton";

// Components
import { CLoginContainer } from './Components'

// Styles
import { styles } from './Styles/LoginScreenStyle'


const LoginScreen = ({ navigation }: { navigation: any }) => {
	return (
		<LinearGradient
			colors={[color.primary, color.primaryGradient]}
			style={{ flex: 1 }}
			start={[0, 0.8]}
			end={[1, 0.2]}>
			<ImageBackground
				style={[commonStyles.center, { flex: 1 }]}
				source={require('@assets/images/Untitled-1.png')}>
				<View style={styles.container}>
					<Text style={styles.containerLabel}>Sign in to</Text>
					<Text style={[styles.containerLabel, { fontSize: scale(26), marginBottom: scale(16) }]}>
						Social Life
					</Text>

					<CLoginContainer />

					<View
						style={[
							commonStyles.row,
							commonStyles.spaceBetween,
							{ marginTop: scale(20), width: scale(130) },
						]}>
						<CButton style={[styles.socialButton, { borderColor: '#c6523a' }]}>
							<Image
								source={require('@assets/images/google.png')}
								style={{ width: scale(17), height: scale(17) }}
							/>
						</CButton>
						<CButton
							style={[styles.socialButton, { borderColor: '#3B5998' }]}
							iconName="facebook"
							iconType="FontAwesome"
							textStyle={{ fontSize: scale(17), color: '#3B5998' }}
						/>
						<CButton
							style={[styles.socialButton, { borderColor: '#000' }]}
							iconName="apple"
							iconType="FontAwesome"
							textStyle={{ fontSize: scale(17), color: '#000' }}
						/>
					</View>
					<CButton
						text="Don't have an account? Register"
						textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(20) }}
					/>
					<CButton
						text="Forgot password"
						textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(8) }}
					/>
					<CButton
						onPress={() => navigation.navigate('Tab')}
						text="Continue without login"
						textStyle={{ fontSize: scale(11), color: color.primary, marginTop: scale(8) }}
					/>
				</View>
			</ImageBackground>
		</LinearGradient>
	);
};

export default memo(LoginScreen)
