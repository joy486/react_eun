import {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        //state 초기값 설정하기
        this.state = {
            number: 0,
            fixednumber: 0
        };
    }
    render () {
        const { number, fixednumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixednumber}</h2>
                <button
                    onClick={()=>{
                        this.setState({number: number+1});
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;