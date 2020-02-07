const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const routes = require("./routes");


const app = express();
mongoose.connect(
  "mongodb+srv://morsch:905304@cluster0-rf0vi.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors())
app.use(express.json());
// HTTP methods: get, post, put, delete

// Types of params:
// Query Params: request.query (filters, sorting, paging,...)
// Route Params: request.params (Indentify resources on the changing or deletion)
// Body: request.body (Register creation data)

// MongoDB (Non-relational)
app.use(routes);
app.listen(3333);
