import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import Input from '../../component/input/input';

class InputValidation extends Component {
  constructor() {
    super()
    this.state = {
      check: [{
        name: /^[a-zA-Z ]{3,30}$/, password: 6, username: /^[a-z0-9_-]{3,16}$/,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      }],
    }
  }
  checkValidation = (data, name) => {
    console.warn('Data ', data, this.state.check[0][name])
  }


  check = (value, type) => {
    console.warn('Props ', this.props)
    console.warn('Value ', value, type)
    const reg = this.state.check[0][type]
    if (reg.test(value) != true) {
      this.setState({ [type]: true })
    }
    else if (reg.test(value) == true) {
      this.setState({ [type]: false })
    }

  }

  render() {
    return (
      <View>
        <Input
          label="Name"
          // type='name'
          getValue={(val) => { console.warn('Name ', val) }}
          placeholder={'Enter Name'} />

        <Input
          label="Username"
          validator='username'
          getValue={(val) => { console.warn('Username ', val) }}
          placeholder={'Enter Name'} />

        <Input
          label="Password"
          validator='password'
          length={10}
          getValue={(val) => { console.warn('Password ', val) }}
          secure={true}
          placeholder={'********'} />

        <Input
          label="Phone"
          validator='phone'
          length={10}
          getValue={(val) => { console.warn('Phone ', val) }}
          country="US"
          placeholder={'+92 231321312'} />

        <Input
          label="Email"
          validator='email'
          getValue={(val) => { console.warn('Email ', val) }}
          placeholder={'Enter Name'} />
      </View>
    )
  }
}
export default InputValidation