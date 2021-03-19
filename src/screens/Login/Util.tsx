import { useRef, useState } from 'react';
import { post } from '@common/utilities';
import { useNavigation } from '@react-navigation/native';
// import validator from 'validator';

// @flow
const useLogin = () => {
  const navigation = useNavigation();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const contentRef = useRef({
    username: '',
    password: '',
  });

  const onLogin = async () => {
    const { username, password } = contentRef.current;

    if (!username || !password) {
      return setErrorMessage('Username or password cannot be blank.');
    }

    setErrorMessage('');
    setLoading(true);
    const { result, error } = await post('login', {
      username,
      password,
    });

    if (!result) {
      switch (error) {
        case "[ERROR]: The requested user doesn't exist":
          setErrorMessage("User doesn't exist.");
          break;
        default:
          setErrorMessage(error.replace('[ERROR]: ', ''));
      }
      setLoading(false);
      return;
    }
    navigation.navigate('Tab');
  };

  const onChangeText = (type: 'username' | 'password', value: string) => {
    contentRef.current[type] = value;
  };

  return { onLogin, onChangeText, errorMessage, loading };
};

export { useLogin };
