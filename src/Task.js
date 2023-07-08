import React from "react";

export default class Task extends React.PureComponent {
    render() {
       console.log("task added");
       return (<div>
          {this.props.title}
       </div>);
    }
 }