# Installation
### Using npm: 

```bash 
npm i -S react-native-simple-input-validator
```
Using yarn: 

```bash 
yarn add react-native-simple-input-validator
```

# Quick Start

### First import Input from 'react-native-simple-input-validator

### Then use it like this 

```javascript 
<Input label='name' validator="username" getTextValue={(val) => console.log(value)} />
```

# Run the example

* cd example
* npm install or yarn
* react-native run-ios or react-native run-android

# Props

| Prop Name        | Type       | Default Description  |
| ------------- |:-------------:| -----:|
| validator      | string | Input validators. Can be a predefined name like email, username or password. |
| customValidator      | funtcion      |   you can pass your own function to validate  |
| errorMessage | string      |    'Invalid entry' Message displayed when the input is invalid |
| errorMessageStyle | ViewPropTypes.style | { color: 'red' }  Style applied to the text error messages |
| errorInputContainerStyle  |   ViewPropTypes.style | { borderColor: ‘red’, borderWidth: 1 }  Style applied to the input view container when the input is invalid. |
| containerStyle |  ViewPropTypes.style  |   Style applied to the global container |
| imageName   | string   |   Name of the image displayed at the left of the input. |
| imageStyle   | ViewPropTypes.style | { width: 20, height: 20 } Style applied to image |
| labelStyle  | Text style  |    Style applied to the label |
| labelViewStyle | Text style | Style applied to label container |
| textInputContainerStyle | ViewPropTypes.style   |  Style applied to the input container, which wraps the icon and the input |
| inputRef   | function    |    Ref for the TextInput |

# Methods

| Name        | Description  |
| ------------- | -----:|
| getTextValue  |      Returns the value of the input |



# Contributing
* If you have any problem, leave an issue here
* If you want to add a feature of fix a bug, leave a pull request.
