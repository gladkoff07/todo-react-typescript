import React, { useState, type ChangeEvent } from "react"
import { TextField } from "@mui/material"
import type { Todo } from "@/types/types"

interface AddTodoProps {
  addTodo: (name: Todo["name"]) => void
}

export const Form = ({ addTodo }: AddTodoProps) => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userInput.trim()) {
      addTodo(userInput.trim())
      setUserInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth={true}
        label='New task'
        variant='outlined'
        value={userInput}
        onChange={handleChange}
      />
    </form>
  )
}
