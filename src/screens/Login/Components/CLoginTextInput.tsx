import React, { memo } from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Common
import { commonStyles } from "common/constants";
import { scale } from "common/utilities";
import CTextInput from "common/components/CTextInput";

const CLoginTextInput =
	({
		 icon,
		 type,
		 onChangeText,
	 }: {
		icon: any;
		type?: 'text' | 'password';
		onChangeText: Function;
	}) => {
		return (
			<View
				style={[
					commonStyles.row,
					commonStyles.spaceBetween,
					{
						width: scale(260),
						borderBottomWidth: scale(1),
						borderBottomColor: '#789',
						padding: scale(4),
						marginTop: scale(12),
					},
				]}>
				<CTextInput style={{ width: '85%' }} type={type} onChangeText={onChangeText} />
				<AntDesign name={icon} size={18} color="#789" />
			</View>
		);
	}
;

export default memo(CLoginTextInput)
