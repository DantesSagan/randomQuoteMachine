import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class RandomQuoteMachine extends React.Component {
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
      randomIndex: Math.floor(Math.random() * 15),
      btn: event.target.value,
    });
  }

  render() {
    const possibleAnswers = [
      // change this line to create new random aphorisms
      'Главная задача — это каждый день узнавать что-то новое.',
      'Хорошая жена, хороший дом — что ещё надо человеку, чтобы встретить старость?.',
      'Нет ничего более замечательного, чем распространение религиозного неверия, или рационализма, на протяжении второй половины моей жизни.',
      'Что-то неутоленное, неутолимое есть во мне; оно хочет говорить.',
      'Хорошо, что народ не понимает, как работает наша банковская система. Иначе завтра же случилась бы революция.',
      'Failure will never overtake me if my determination to succeed is strong enough.',
      'There is no elevator to success, you have to take the stairs.',
      'Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.',
      'Ever Tried. Ever failed. No matter. Try again. Fail again. Fail better.',
      'You can, you should, and if you"re brave enough to start, you will.',
      'Without hard work, nothing grows but weeds.',
      'You must do the things you think you cannot do.',
      'Follow your inner moonlight. Don"t hide the madness.',
      'In the depth of winter, I finally learned that within me there lay an invincible summer.',
      'The scariest moment is always just before you start.',
      'May you live every day of your life.',
    ];
    const authorsText = [
      'Ларри Кинг',
      'Белое солнце пустыни',
      'Чарльз Дарвин',
      'Фридрих Ницше, "Так говорил Заратустра"',
      'Генри Форд',
      'Og Mandino',
      'Zig Ziglar',
      'William Shakespeare',
      'Samuel Beckett',
      'Stephen King',
      'Gordon B. Hinckley',
      'Eleanor Roosevelt',
      'Allen Ginsberg',
      'Albert Camus',
      'Stephen King',
      'Jonathan Swift',
    ];
    const colors = [
      '#7CB9E8',
      '#A3C1AD',
      '#0E3386',
      '#00008B',
      '#FBCEB1',
      '#FF0800',
      '#DC143C',
      '#4B6F44',
      '#87A96B',
      '#8F9779',
      '#3FFF00',
      '#D0F0C0',
      'black',
      'white',
      'yellow',
      'blue',
      'green',
      'purple',
      'pink',
    ];
    const color = colors[this.state.randomIndex];
    const text = possibleAnswers[this.state.randomIndex];
    const authors = authorsText[this.state.randomIndex];
    return (
      <div
        className='container-fluid d-flex align-items-center justify-content-center'
        style={{ backgroundColor: color }}
        id='quote-box'
      >
        <div className='card' id='card'>
          <div className='card-body' id='quote-text'>
            <blockquote className='blockquote mb-0'>
              <h3>
                <i className='fa fa-quote-left'></i>
              </h3>
              <br />
              <span id='text' className='card-text'>
                {text}
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

          <div className='card-footer'>
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
              className='btn-hero button'
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

export default RandomQuoteMachine;
