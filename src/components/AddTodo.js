import React from "react"
import { connect } from "react-redux"

import { addTodo } from "../redux/actions"
import { getTodos } from "../redux/selectors"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "" }
  }

  updateInput = input => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    console.log(this.props)
    // dispatches actions to add todo
    this.props.addTodo(this.state.input)

    // sets state back to empty string
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(state => ({
  todos: getTodos(state)
}), { addTodo })(AddTodo)
