import { useState } from "react"
import "./App.css"
import { Header, TodoList, Footer, Form } from "./componets"
import type { FilterType, Todo } from "@/types/types.ts"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import { Paper } from "@mui/material"

const TODOS = [
  { id: 1, name: "Тестовое задание", completed: false },
  { id: 2, name: "Прекрасный код", completed: false },
  {
    id: 3,
    name: "Покрытие тестами",
    completed: true,
  },
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(TODOS)
  const [filter, setFilter] = useState<FilterType>("all")

  const checkTodo = (id: Todo["id"]) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo }
      ),
    ])
  }

  const addTodo = (name: Todo["name"]) => {
    if (name.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        name: name.trim(),
        completed: false,
      }

      setTodos([...todos, newTodo])
    }
  }

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const activeCount = todos.filter((todo) => !todo.completed).length

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  return (
    <Container maxWidth='sm'>
      <Paper
        elevation={3}
        sx={{ p: 3 }}
      >
        <Header />
        <Form addTodo={addTodo} />
        <Box>
          <TodoList
            todos={filteredTodos}
            checkTodo={checkTodo}
          />
        </Box>
        <Footer
          activeCount={activeCount}
          clearCompleted={clearCompleted}
          todos={todos}
          filter={filter}
          setFilter={setFilter}
        />
      </Paper>
    </Container>
  )
}

export default App
