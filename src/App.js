import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import * as api from "./Caller";
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
// import sampledata from './sampledata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stream_data: [] };
  }

  async componentDidMount() {
    let new_data_stream = await api.fetch_data_stream();
    this.setState({ stream_data: new_data_stream['data'] });
  }
  render() {
    const parsed_data = this.state.stream_data;
    const display = Object.keys(parsed_data).map((data, i) => {
      // console.log("Data -> ", parsed_data[i]);
      return (
        <Button key={i} href={parsed_data[i]['url']} variant="outline-info" className="mb-3 text-left" lg="auto" block>
          {parsed_data[i]['text']}
        </Button>   
      )             
    })
    
    return (
            <Container className="mt-4">
              <h1>
                Devops Beat
              </h1>
              {display}
            </Container>
    );
  }
}

export default App;