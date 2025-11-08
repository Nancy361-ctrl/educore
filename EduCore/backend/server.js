import cors from 'cors';
// or: const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',  // Allow your frontend origin
  credentials: true,  // If you use cookies or auth headers
}));
