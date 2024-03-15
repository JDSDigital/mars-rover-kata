interface IMarsRover {
  MarsRover: (grid: string) => void
  execute: (command: string) => string
}

enum Direction {
  N = "N",
  E = "E",
  S = "S",
  W = "W",
}

enum Command {
  M = "M",
  L = "L",
  R = "R",
}

export class MarsRoverClass implements IMarsRover {
  private x: number = 0
  private y: number = 0
  private direction: string = "N"
  private maxX: number = 10
  private maxY: number = 10

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
  private move(): void {}
  private turnLeft(): void {}
  private turnRight(): void {}
}
