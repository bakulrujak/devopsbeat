import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import * as api from "./Caller";
import Button from 'react-bootstrap/Button';
import Media from 'react-bootstrap/Media';

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
      <Container className="mt-4 align-self-center">
        <Media className="mb-3 mt-3">
          <img
            className="align-self-center"
            width={150}
            alt="Devops Beat"
            src={process.env.PUBLIC_URL + '/logo_text.png'}
          />
        </Media>
        {display}
        <span>
          Built by <a href="https://andika.kurniantoro.com" target="_blank" rel="noopener noreferrer">Andika Kurniantoro</a><br />
          With <a href="https://aws-amplify.github.io/" target="_blank" rel="noopener noreferrer">AWS Amplify</a>
        </span>
      </Container>
    );
  }
}

export default App;