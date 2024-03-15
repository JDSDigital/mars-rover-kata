import { Command } from "./Command.js"
import { Direction } from "./Direction.js"

interface IMarsRover {
  MarsRover: (grid: string) => void
  execute: (command: string) => string
}

export class MarsRoverClass implements IMarsRover {
  private x: number = 0
  private y: number = 0
  private direction: Direction = Direction.N
  private maxX: number = 9
  private maxY: number = 9

  MarsRover(grid: string): void {
    const [x, y] = grid.split(":").map(Number)
    this.maxX = x
    this.maxY = y
  }

  execute(command: string): string {
    command.split("").map((instruction: string) => {
      switch (instruction) {
        case Command.M:
          this.move()
          break
        case Command.L:
          this.turnLeft()
          break
        case Command.R:
          this.turnRight()
          break
      }
    })

    return `${this.x}:${this.y}:${this.direction}`
  }

  private move(): void {
    switch (this.direction) {
      case Direction.N:
        if (this.y === this.maxY) {
          this.y = 0
        } else {
          this.y = this.y + 1
        }
        break
      case Direction.E:
        if (this.x === this.maxX) {
          this.x = 0
        } else {
          this.x = this.x + 1
        }
        break
      case Direction.S:
        if (this.y === 0) {
          this.y = this.maxY
        } else {
          this.y = this.y - 1
        }
        break
      case Direction.W:
        if (this.x === 0) {
          this.x = this.maxX
        } else {
          this.x = this.x - 1
        }
        break
    }
  }

  private turnLeft(): void {
    switch (this.direction) {
      case Direction.N:
        this.direction = Direction.W
        break
      case Direction.W:
        this.direction = Direction.S
        break
      case Direction.S:
        this.direction = Direction.E
        break
      case Direction.E:
        this.direction = Direction.N
        break
    }
  }

  private turnRight(): void {
    switch (this.direction) {
      case Direction.N:
        this.direction = Direction.E
        break
      case Direction.E:
        this.direction = Direction.S
        break
      case Direction.S:
        this.direction = Direction.W
        break
      case Direction.W:
        this.direction = Direction.N
        break
    }
  }
}
