import React, { Component } from 'react';
import { View, TextInput, Text, Image, ViewPropTypes } from 'react-native';

import Styles from './inputStyle';
import PropTypes from 'prop-types';
import { keyboard } from '../../constant/phoneValidation';

class Input extends Component {

  static propTypes = {
    ...TextInput.propTypes,
    /**
     * Input validators. Can be a regexp or a predefined name like email or password
     */
    validator: PropTypes.string,
    /**
     * Custom validator function which must return a boolean. Useful to check if password matches in 2 different inputs for example
     */
    customValidator: PropTypes.func,
    /**
     * Error message displayed under the input
     */
    errorMessage: PropTypes.string,
    /**
     * Error message style
     */
    errorMessageStyle: Text.propTypes.style,
    /**
     * Style of the input when it’s invalid
     */
    errorInputContainerStyle: ViewPropTypes.style,
    /**
     * Image name to be displayed at left of the input
     */
    imageName: PropTypes.string,
    /**
     * Image Style
     */
    imageStyle: Text.propTypes.style,
    /**
     * Input label
     */
    label: PropTypes.string,
    /**
     * Label style
     */
    labelStyle: Text.propTypes.style,
    /**
     * Label view style style
     */
    labelViewStyle: Text.propTypes.style,
    /**
     * Input container style
     */
    textInputContainerStyle: TextInput.propTypes.style,
    /**
     * TextInput container style
     */
    textInputStyle: TextInput.propTypes.style,
    /**
     * Plaaceholder text color
     */
    placeholderTextColor: PropTypes.string,
    /**
     * Input ref
    */
    inputRef: PropTypes.func
  };

  static defaultProps = {
    validator: null,
    customValidator: null,
    errorMessage: 'Invalid entry',
    errorMessageStyle: { color: 'red' },
    errorInputContainerStyle: { },
    imageName: null,
    imageStyle: {},
    label: null,
    labelStyle: {},
    labelViewStyle: {},
    textInputContainerStyle: {},
    placeholderTextColor: 'd4d4d4',
    textInputStyle: {},
    inputRef: null
  };

  constructor() {
    super()
    this.state = {
      text: '',
      error: false,
      keyboard: keyboard,
      check: [{
        name: /^[a-zA-Z ]{3,30}$/,
        phone: /^[+0-9]{8,10}$/,
        username: /^[a-z0-9_-]{3,16}$/,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }]
    }
  }

  check = () => {
    let { check, text } = this.state;
    let { customValidator, getValue, validator } = this.props;
    let reg;
    console.warn('type ', check[0][validator])
    if (validator == null) {
      reg = check[0].name
    }
    else {
      reg = check[0][validator]
    }
    if (customValidator) {
      let isValid = customValidator(text)
      if (isValid != true)
        this.setState({ name: true, error: true })
      else {
        getValue(text)
        this.setState({ name: false, error: false })
      }
    }

    else if (validator != 'password' && validator != 'phone') {
      if (reg.test(text) != true) {
        this.setState({ name: true, error: true })
      }
      else {
        getValue(text)
        this.setState({ name: false, error: false })
      }
    }
    else if (validator == 'password') {
      if (text.length == 0) {
        this.setState({ name: true, error: true })
      }
      else {
        getValue(text)
        this.setState({ name: false, error: false })
      }
    }
  }

  render() {
    let {
      validator,
      errorMessage,
      textInputContainerStyle,
      labelStyle,
      label,
      labelViewStyle,
      textInputStyle,
      type,
      secure,
      length,
      placeholder,
      imageName,
      placeholderTextColor,
      imageStyle,
      errorInputContainerStyle,
      errorMessageStyle
    } = this.props;

    let { keyboard, name, error } = this.state;

    return (
      <View>
        <View style={[Styles.textView, labelViewStyle]} >
          <Text style={[Styles.textStyle, labelStyle]}> {label} </Text>
        </View>
        <View style={[Styles.textinputView, textInputContainerStyle,
        { borderBottomColor: name == true ? '#ff0000' : '#000' }]}>
          <Image source={imageName}
            style={[Styles.imageStyle, imageStyle]}
          />
          <TextInput
            secureTextEntry={secure}
            keyboardType={keyboard[0][validator]}
            maxLength={length}
            placeholder={placeholder}
            style={textInputStyle}
            onChangeText={(text) => this.setState({ text })}
            onBlur={this.check}
            placeholderTextColor={placeholderTextColor}
          />
        </View>
        { error == true && <View style={errorInputContainerStyle}>
          <Text style={errorMessageStyle}>
              {errorMessage}
          </Text>
        </View>
        }
      </View>
    )
  }
}
export default Input
