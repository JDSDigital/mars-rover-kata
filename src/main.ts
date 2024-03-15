interface IMarsRover {
  MarsRover: (grid: string) => string
  execute: (command: string) => string
}

export class MarsRoverClass implements IMarsRover {
  MarsRover(grid: string): string {
    return ""
  }

  execute(command: string): string {
    return ""
  }
}

interface IMorningRoutine {
  whatShouldIDoNow: () => string
}
