import { List } from "@mui/material"
import { TodoListItem } from "./todoListItem/todoListItem"
import type { Todo } from "@/types/types"

interface TodoListProps {
  todos: Todo[]
  checkTodo: (id: Todo["id"]) => void
}

export const TodoList = ({ todos, checkTodo }: TodoListProps) => {
  return (
    <List sx={{ height: "180px", overflow: "auto" }}>
      {todos.length ? (
        todos.map((item) => (
          <TodoListItem
            key={item.id}
            checkTodo={checkTodo}
            {...item}
          />
        ))
      ) : (
        <h3>No todos</h3>
      )}
    </List>
  )
}
