import { describe, it, expect } from "vitest"
import { MarsRoverClass } from "./main.js"

describe("Default test", () => {
  it("given a grid with no obstacles, input MMRMMLM gives output 2:3:N", () => {
    const rover = new MarsRoverClass()

    rover.MarsRover("9:9")

    const result = rover.execute("MMRMMLM")

    expect(result).toBe("2:3:N")
  })

  it("given a grid with no obstacles, input MMMMMMMMMM gives output 0:0:N (due to wrap-around)", () => {
    const rover = new MarsRoverClass()

    rover.MarsRover("9:9")

    const result = rover.execute("MMMMMMMMMM")

    expect(result).toBe("0:0:N")
  })

  it("given a grid with no obstacles, input MMMM gives output 0:4:N", () => {
    const rover = new MarsRoverClass()

    rover.MarsRover("9:9")

    const result = rover.execute("MMMM")

    expect(result).toBe("0:4:N")
  })

  it.todo("given a grid with an obstacle at (0, 3), input MMMM gives output O:0:2:N")
})
