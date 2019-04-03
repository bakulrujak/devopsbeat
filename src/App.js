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
    this.setState({ stream_data: new_data_stream });
    console.log("Fetched data: ", this.state.stream_data);
  }
  render() {
    return (
            <Container>
              <h1>
                Devops Beat
              </h1>
              {this.state.stream_data.map((data, i) =>
                <Button key={i} href={data.url} variant="outline-info" className="mb-3 text-left" lg="auto" block>
                  {data.text}
                </Button>                
              )}
            </Container>
    );
  }
}

export default App;