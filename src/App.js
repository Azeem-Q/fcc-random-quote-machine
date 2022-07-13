import React from 'react';
import './style.scss';
import randomColor from 'randomcolor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
const quotes = [
    'I do not fear computers. I fear lack of them.',
    'A computer once beat me at chess, but it was no match for me at kick boxing.',
    'Computer Science is no more about computers than astronomy is about telescopes.',
    'The computer was born to solve problems that did not exist before.',
    'Software is like entropy: It is difficult to grasp, weighs nothing, and obeys the Second Law of Thermodynamics; i.e., it always increases.',
    'Software is a gas; it expands to fill its container.',
    "All parts should go together without forcing.  You must remember that the parts you are reassembling were disassembled by you.  Therefore, if you can't get them together again, there must be a reason.  By all means, do not use a hammer.",
    "Standards are always out of date.  That's what makes them standards.",
    "Physics is the universe's operating system.",
    "It's hardware that makes a machine fast.  It's software that makes a fast machine slow.",
    'Imagination is more important than knowledge.  For knowledge is limited, whereas imagination embraces the entire world.',
    'The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.',
    'The more you know, the more you realize you know nothing.',
    'Tell me and I forget.  Teach me and I remember.  Involve me and I learn.',
    "Real knowledge is to know the extent of one's ignorance.",
    'If people never did silly things, nothing intelligent would ever get done.',
    'Getting information off the Internet is like taking a drink from a fire hydrant.',
    'If you think your users are idiots, only idiots will use it.',
    "From a programmer's point of view, the user is a peripheral that types when you issue a read request.",
    "Where is the 'any' key?",
    'Computers are good at following instructions, but not at reading your mind.',
    "There is only one problem with common sense; it's not very common.",
    'Your most unhappy customers are your greatest source of learning.',
    'Let us change our traditional attitude to the construction of programs: Instead of imagining that our main task is to instruct a computer what to do, let us concentrate rather on explaining to human beings what we want a computer to do.',
];
const authors = [
    '- Isaac Asimov',
    '- Emo Philips',
    '- Edsger W. Dijkstra',
    '- Bill Gates',
    '- Norman Augustine',
    '- Nathan Myhrvold',
    '- IBM Manual, 1925',
    '- Alan Bennett',
    '- Steven R Garman',
    '- Craig Bruce',
    '- Albert Einstein',
    '- Stephen Hawking',
    '- Socrates',
    '- Benjamin Franklin',
    '- Confucius',
    '- Ludwig Wittgenstein',
    '- Mitchell Kapor',
    '- Linus Torvalds',
    '- P. Williams',
    '- Homer Simpson, in response to the message, “Press any key”',
    '- Donald Knuth',
    '- Milt Bryce',
    '- Bill Gates',
    '- Donald E. Knuth',
];

const random = Math.floor(Math.random() * quotes.length);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: quotes[random],
            author: authors[random],
            color: randomColor(),
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const clickRandom = Math.floor(Math.random() * quotes.length);
        this.setState({
            quote: quotes[clickRandom],
            author: authors[clickRandom],
            color: randomColor(),
        });
    }

    render() {
        return (
            <div
                id="bg"
                style={{
                    backgroundColor: this.state.color,
                    transition: 'background-color 1000ms ease-in',
                }}
            >
                <div id="quote-box">
                    <p
                        id="text"
                        style={{
                            color: this.state.color,
                            transition: 'color 1000ms ease-in',
                        }}
                    >
                        {' '}
                        <i className="fa-solid fa-quote-left"></i>{' '}
                        {this.state.quote}{' '}
                        <i className="fa-solid fa-quote-right"></i>
                    </p>
                    <p
                        id="author"
                        style={{
                            color: this.state.color,
                            transition: 'color 1000ms ease-in',
                        }}
                    >
                        <i>{this.state.author}</i>
                    </p>
                    <div id="btns">
                        <a
                            id="tweet-quote"
                            target={'_blank'}
                            rel={'noreferrer'}
                            href="https://twitter.com/intent/tweet"
                        >
                            <FontAwesomeIcon
                                icon={faTwitterSquare}
                                size="xl"
                                style={{
                                    color: this.state.color,
                                    transition: 'color 1000ms ease-in',
                                }}
                            />
                        </a>
                        <button
                            id="new-quote"
                            onClick={this.handleClick}
                            style={{
                                backgroundColor: this.state.color,
                                transition: 'background-color 1000ms ease-in',
                            }}
                        >
                            New Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
