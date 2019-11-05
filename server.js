import connecDB from './config/db'
import app from './app'

// connect to database
connecDB()

const PORT = process.env.PORT || 5000

/* eslint-disable no-console */
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
