import React from "react";

class inputTest extends React.Component {
    state = {
        inputValue: "Hello Text Input",
        inputValue2: "",
        textareaText: "Hello",
        option: false,
        array: [],
    };

    handleChange = (event: { target: { value: any; name: any; }; }) => {
        console.log("Hello");
        let value = event.target.value
        let name = event.target.name
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.setState({
            array: [1, 2, 3],
        })
    }

    render() {
        // const listItems = this.state.array.map((number) =>
        // <li>{number}</li>
        // );
        return (
            <div>
                <input type="text" name="inputValue" value={this.state.inputValue} onChange={this.handleChange} />
                <input type="text" name="inputValue2" value={this.state.inputValue2} onChange={ (e)=>{ this.setState({inputValue2: e.target.value}) } } />
                <h1>Hello {this.state.inputValue}</h1>
                { this.state.inputValue2 !== ""
                    ? <h1>IF {this.state.inputValue2}</h1>
                    : <h1>ELSE {this.state.inputValue2}</h1>
                }

                <textarea value={this.state.textareaText} onChange={ (e)=>{ this.setState({textareaText: e.target.value}) }}>
                   
                </textarea>

                <h1>{this.state.textareaText}</h1>

                <select onChange={ (e)=>{ this.setState({option: e.target.value}) }}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                { this.state.option &&
                    <h1>{this.state.option}</h1>
                }
                {/* <ul>{listItems}</ul> */}
                <ul>
                    {this.state.array.map((number) =>
                    <li key={number}>{number}</li>
                    )}
                </ul>
                
                

            </div>
        );
    }

}

export default inputTest