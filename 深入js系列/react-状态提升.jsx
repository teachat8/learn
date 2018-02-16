class BoilingVerdict extends React.Component {
    render() {
        return (
            this.props.celsius >=100 
            ?
            <p>The water would boil.</p>
            :
            <p>The water would not boil.</p>            
        );
    }
}

const scaleNames = {
    c : 'Celsius',
    f : 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        );
    }
}


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature : '',
            scale : 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    onTemperatureChange={this.handleCelsiusChange} 
                    scale="c"
                    temperature={celsius}
                />
                <TemperatureInput 
                    onTemperatureChange={this.handleFahrenheitChange}
                    scale="f"
                    temperature={fahrenheit}
                />         
            </div>
        );
    }
}

