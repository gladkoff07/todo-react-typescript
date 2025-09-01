import { Box, Button, ButtonGroup } from "@mui/material"
import type { FilterType, Todo } from "@/types/types"

interface FooterProps {
  todos: Todo[]
  activeCount: number
  clearCompleted: () => void
  filter: FilterType
  setFilter: (filter: FilterType) => void
}

export const Footer = (props: FooterProps) => {
  const { activeCount, clearCompleted, todos, filter, setFilter } = props
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{activeCount} items left </span>
      <ButtonGroup size='small'>
        <Button
          variant={filter === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filter === "active" ? "contained" : "outlined"}
          onClick={() => setFilter("active")}
        >
          Active
        </Button>
        <Button
          variant={filter === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button
        variant='outlined'
        onClick={clearCompleted}
        disabled={!todos.some((todo) => todo.completed)}
        size='small'
      >
        Clear Completed
      </Button>
    </Box>
  )
}
