// import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import App from "./App"

describe("TodoApp", () => {
  test("Рендер начальных задач", () => {
    render(<App />)
    expect(screen.getByText("Тестовое задание")).toBeInTheDocument()
    expect(screen.getByText("Прекрасный код")).toBeInTheDocument()
    expect(screen.getByText("Покрытие тестами")).toBeInTheDocument()
  })

  test("Проверка на добавление пустой задачи", () => {
    render(<App />)
    const input = screen.getByLabelText("New task")
    fireEvent.keyPress(input, { key: "Enter", code: "Enter" })
    expect(screen.getAllByRole("listitem")).toHaveLength(3)
  })

  test("Переключает статус задачи", () => {
    render(<App />)

    const checkbox = screen.getAllByRole("checkbox")[1]
    fireEvent.click(checkbox)

    expect(screen.getByText("1 items left")).toBeInTheDocument()
  })

  test("Фильтрует активные задачи", () => {
    render(<App />)

    const activeFilterButton = screen.getByText("Active")
    fireEvent.click(activeFilterButton)

    expect(screen.queryByText("Покрытие тестами")).not.toBeInTheDocument()
    expect(screen.getByText("Тестовое задание")).toBeInTheDocument()
  })

  test("Фильтрует выполненные задачи", () => {
    render(<App />)

    const completedFilterButton = screen.getByText("Completed")
    fireEvent.click(completedFilterButton)

    expect(screen.getByText("Покрытие тестами")).toBeInTheDocument()
    expect(screen.queryByText("Тестовое задание")).not.toBeInTheDocument()
  })

  test("Фильтрует все задачи", () => {
    render(<App />)

    fireEvent.click(screen.getByText("Active"))
    fireEvent.click(screen.getByText("All"))

    expect(screen.getByText("Тестовое задание")).toBeInTheDocument()
    expect(screen.getByText("Прекрасный код")).toBeInTheDocument()
    expect(screen.getByText("Покрытие тестами")).toBeInTheDocument()
  })

  test("Очищает выполненные задачи", () => {
    render(<App />)

    const clearButton = screen.getByText("Clear Completed")
    fireEvent.click(clearButton)

    expect(screen.queryByText("Покрытие тестами")).not.toBeInTheDocument()
    expect(screen.getByText("2 items left")).toBeInTheDocument()
  })
})
