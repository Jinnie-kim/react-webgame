const React = require('react');
const { Component, createRef } = require('react');
const Try = require('./Try');

function getNumbers() {
  // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1);
    array.push(chosen);
  }
  return array;
}
class Baseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // array with random numbers ex: [1,3,5,7]
    tries: [], // push 쓰면 안됨. (불변성!)
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {
      this.setState({
        result: '홈런!',
        tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],
      });
      setTimeout(() => {
        alert('게임을 다시 시작합니다.!');
      }, 300);
      this.setState({
        value: '',
        answer: getNumbers(),
        treis: [],
      });
      this.inputRef.current.focus();
    } else {
      const answerArray = this.state.value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(',')}였습니다.`,
        });
        alert('게임을 다시 시작합니다.!');
        this.setState({
          value: '',
          answer: getNumbers(),
          treis: [],
        });
        this.inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === this.state.answer[i]) {
            strike += 1;
          } else if (this.state.answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        console.log(strike);
        console.log(ball);
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다` }],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef();

  render() {
    console.log(this.state.answer);
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref={this.inputRef} maxLength={4} value={this.state.value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.state.tries.map((v, i) => {
            return <Try tries={v} key={i} />;
          })}
        </ul>
      </>
    );
  }
}
module.exports = Baseball;
