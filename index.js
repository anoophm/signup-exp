const express = require('express');
const app = express();
const port = 8050;
app.use((req, res, next) => {
console.log('got req',req.method, req.path);
  next()
})
app.use(express.static('public'));
app.listen(port, () => console.log('Server listening on port ' + port));
