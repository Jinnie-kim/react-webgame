const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '유르',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({ result: '정답입니다.', word: this.state.value, value: '' });
      this.input.focus();
    } else {
      this.setState({ result: '틀렸습니다.', value: '' });
    }
  };

  onChangeValue = (e) => {
    this.setState({ value: e.currentTarget.value });
  };

  input;

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h1>{this.state.word}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" value={this.state.value} ref={this.onRefInput} onChange={this.onChangeValue} />
          <button type="submit">입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
