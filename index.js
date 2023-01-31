const path = require('path');
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 4001));
app.use(express.static(path.join(__dirname, './public')));
app.use('/public', express.static('public'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port:', app.get('port'));
});