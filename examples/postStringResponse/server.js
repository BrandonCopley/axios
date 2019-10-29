module.exports = function (req, res) {

  console.log('API HIT');

  var data = '';

  req.on('data', function (chunk) {
    data += chunk;
  });

  req.on('end', function () {
    //200 writes json data
    // res.writeHead(200, {
    //   'Content-Type': 'text/json'
    // });
    //res.write(JSON.stringify({"key":"value"}));

    //400 writes text data
    res.writeHead(400, {
      'Content-Type': 'text/plain'
    });
    res.write("response goes here");
    res.end();
  });

};
