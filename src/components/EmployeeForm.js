import React, { Component } from 'react';
import { Picker, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

class EmployeeForm  extends Component {

  renderPicker() {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
    'Saturday', 'Sunday'];
    return days.map((day) => {
      return <Picker.Item label={day} value={day} key={day} />
    })
  }

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            /* onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: 'text' })}
            or... 
            */
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })} />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })} />
        </CardSection>
        <CardSection style={{ flexDirection: 'column'}}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })} >
            {this.renderPicker()}
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerStyle: {
    width: windowWidth
  },
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);