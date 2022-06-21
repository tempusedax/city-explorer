import React from 'react';
import Form from 'react-bootstrap/Form';

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      selectedForm: [],
    };
  };

  handleOnHide = () => {
    this.setState({
      showForm: false
    });
  };

  handleOnShowModal = (beast) => {
    this.setState({
      showForm: true,
      selectedBeast: beast
    });
  };
  render() {
    return (
    <Form className="formBasicEmail">
      <Form.Group>
        <Form.Label>Filter by number of horns</Form.Label>
        <Form.Select name= 'selected' onChange={this.props.handlesubmit}>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
        </Form.Select>
      </Form.Group>
    </Form>
  )
  };
}
export default Forms;



