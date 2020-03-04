import { promisedFiglet } from '../lib/lib'

export const run = async (): Promise<void> => {
  try {
    console.log(await promisedFiglet('Hello World!'))
  } catch (error) {
    console.error('Error while creating ASCII art:')
    console.error(error)
  }
}
