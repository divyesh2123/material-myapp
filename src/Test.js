import React, { PureComponent } from 'react'
import Task from './Task';

export default class Test extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           taskList: [
              { title: 'excercise'},
              { title: 'cooking'},
              { title: 'Reacting'},
           ]
        };
    }

    componentDidMount() {
        setInterval(() => {
           this.setState((oldState) => {
              return { taskList: [...oldState.taskList] }
           });
        }, 1000);
     }
     

  render() {
    console.log("taskList render called");
    return (<div>
       {this.state.taskList.map((task, i) => {
          return (<Task
             key={i}
             title={task.title}
          />);
       })}
    </div>);
  }
}
