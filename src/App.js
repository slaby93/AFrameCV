import React, { Component } from 'react';
import Button from './components/Button';
import styled from 'styled-components';
import AFrame from './components/AFrame';

class App extends React.PureComponent {

  constructor() {
    super();
    this.handleStartClick = this.handleStartClick.bind(this);
    this.state = {
      activateAFrame: false
    };
  }

  handleStartClick() {
    this.setState({ activateAFrame: true });
  }

  render() {
    const { className } = this.props;
    const { activateAFrame } = this.state;
    return (
      <div className={className}>
        {activateAFrame
          ? <AFrame />
          : <Button onClick={this.handleStartClick}>
            start
      </Button>}
      </div>
    );
  }

}

const Styled = styled(App) `
  width: 100%;
  height: 100%;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  Button {
    margin-top: 30vh;
    &:active {
      transform: scale(.9);
    }
  }
`;

export default Styled;
