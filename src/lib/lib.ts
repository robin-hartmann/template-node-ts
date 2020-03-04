import figlet from 'figlet'

export const promisedFiglet = (txt: string): Promise<string> =>
  new Promise((resolve, reject) =>
    figlet(txt, (error, result) => (error ? reject(error) : resolve(result)))
  )
