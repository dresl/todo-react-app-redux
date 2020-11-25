import React from "react"
import { connect } from "react-redux"
import cx from "classnames"
import { getTodos } from "../redux/selectors"
import { toggleTodo } from "../redux/actions"

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <li
        className="todo-item"
        onClick={() => {
          this.props.toggleTodo(this.props.todo.id)
        } /** dispatches action to toggle todo */}
      >
        {this.props.todo && this.props.todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            this.props.todo && this.props.todo.completed && "todo-item__text--completed"
          )}
        >
          {this.props.todo.content}
        </span>
      </li>
    )
  }
}

const FuncTodo = ({ todo }) => (
  <li
    className="todo-item"
    onClick={() => {} /** dispatches action to toggle todo */}
  >
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "todo-item__text",
        todo && todo.completed && "todo-item__text--completed"
      )}
    >
      {todo.content}
    </span>
  </li>
)

export default connect(null, { toggleTodo })(Todo)
