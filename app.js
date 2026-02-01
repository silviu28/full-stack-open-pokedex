import express from 'express'
const app = express()

// get the port from env variable
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  /* Simulate a health check fail */
  // // eslint-disable-next-line no-constant-condition
  // if (true)
  //   throw Error('Deployment health check failed! Should fallback to previous version.')

  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
