#!/usr/bin/env node

import { run } from './run'

run().catch(error => {
  /* eslint-disable no-console */
  console.error('Uncaught error:')
  console.error(error)
  /* eslint-enable no-console */
})
