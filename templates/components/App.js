import React from 'react';
import Test from '../components/Test';

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Test />
            </div>
        );
    }
}

export default App;