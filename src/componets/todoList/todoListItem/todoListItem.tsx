import type { Todo } from "@/types/types"
import {
  ListItem,
  Tooltip,
  Checkbox,
  ListItemText,
  Typography,
} from "@mui/material"

interface TodoListItemProps {
  id: Todo["id"]
  name: Todo["name"]
  completed: Todo["completed"]
  checkTodo: (id: Todo["id"]) => void
}

export const TodoListItem = (props: TodoListItemProps) => {
  const { id, name, completed, checkTodo } = props

  return (
    <ListItem
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0 10px",
      }}
      sx={{
        borderBottom: "1px solid #eee",
      }}
    >
      <Tooltip
        title='Change state'
        placement='left'
      >
        <Checkbox
          edge='start'
          checked={completed}
          onChange={() => checkTodo(id)}
        />
      </Tooltip>
      <ListItemText>
        <Typography
          variant='h6'
          sx={{
            textDecoration: completed ? "line-through" : "none",
            color: completed ? "text.secondary" : "text.primary",
          }}
        >
          {name}
        </Typography>
      </ListItemText>
    </ListItem>
  )
}
