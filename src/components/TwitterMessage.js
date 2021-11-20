import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }
  
  messageHandler = (e) => {
    this.setState({message: e.target.value}, ()=>console.log(this.state.message))
  }

  keepingCount = () => {
    return this.state.message ? this.props.maxChars - this.state.message.length : this.props.maxChars
  }

  render() {
    return (
      <div>
        <div>
          <strong>Your message:</strong>
          <input type="text" name="message" id="message" value={this.state.message} onChange={this.messageHandler}/>
        </div>
        <div>
          <p>Characters Remaining: {this.keepingCount()}</p>
        </div>
      </div>
      
    );
  }
}

export default TwitterMessage;
