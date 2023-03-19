import React, { Component } from 'react';

class ReactionCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요',
    result: [],
  };
  timeout;
  startTime;
  endTime;
  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭!',
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 랜덤 변경
    } else if (state === 'ready') {
      // 성급한 클릭
      clearTimeout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '너무 성급하시군요! 초록색이 된 후에 클릭하세요.',
      });
    } else if (state === 'now') {
      // 반응 속도 체크
      this.endTime = new Date();
      this.setState((prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요',
          result: [...prevState.result, this.endTime.getTime() - this.startTime.getTime()],
        };
      });
    }
  };

  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        {this.state.result.length === 0 ? null : <div>평균 시간: {this.state.result.reduce((a, b) => a + b) / this.state.result.length}ms</div>}
      </>
    );
  }
}

export default ReactionCheck;
