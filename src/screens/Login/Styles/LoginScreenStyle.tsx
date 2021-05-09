import { StyleSheet } from "react-native";
import { scale } from "common/utilities";

export const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		alignItems: 'center',
		width: scale(300),
		borderRadius: scale(30),
		paddingHorizontal: scale(16),
		paddingVertical: scale(30),
		marginBottom: '5%',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,
		elevation: 10,
	},
	containerLabel: {
		fontSize: scale(16),
		color: '#789',
		fontWeight: 'bold',
	},
	socialButton: {
		width: scale(34),
		height: scale(34),
		borderRadius: scale(17),
		borderWidth: scale(1),
	},
});
