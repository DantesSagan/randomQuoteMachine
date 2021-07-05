import './App.css';
import React from 'react';
import '../src/color/hex';

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: '',
      btn: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      randomIndex: Math.floor(Math.random() * 20),
      btn: event.target.value,
    });
  }

  render() {
    const possibleAnswers = [
      // change this line to create new random aphorisms
      'Главная задача — это каждый день узнавать что-то новое. (Ларри Кинг)',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful',
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    const authors = possibleAnswers[this.state.randomIndex];
    return (
      <div
        className='container-fluid d-flex align-items-center justify-content-center'
        id='quote-box'
      >
        <div className='card'>
          <div className='card-body' id='quote-text'>
            <blockquote className='blockquote mb-0'>
              <h3>
                <i className='fa fa-quote-left'></i>
              </h3>
              <br />
              <span id='text' className='card-text'>
                {answer}
              </span>
              <h3>
                <i className='fa fa-quote-right' id='floatRight'></i>
              </h3>
              <br />
              <footer className='blockquote-footer'>
                {' '}
                <cite id='author' title='Source Title'>
                  {authors}
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className='buttons card-footer'>
            <span className='color'></span>
            <a
              id='tweet-quote'
              className='btn'
              href='https://twitter.com/intent/tweet'
              title='tweet twitter'
              target='_top'
            >
              {' '}
              <i className='fa fa-twitter-square' aria-hidden='true'></i>
            </a>
            <a
              id='tweet-quote'
              className='btn'
              href='https://vk.com/'
              title='tweet vk'
              target='_top'
            >
              {' '}
              <i className='fa fa-vk' aria-hidden='true'></i>
            </a>
            <button
              onClick={this.handleClick.bind(this)}
              className='btn btn-primary button'
              id='new-quote'
            >
              Quote
            </button>
          </div>

          <br />
        </div>
      </div>
    );
  }
}

export default MagicEightBall;
