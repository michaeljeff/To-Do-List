//var fs = require('fs');

//console.log('begin');

//var data = fs.readFileSync('input.txt');
//console.log(data.toString());

//fs.readFile('input.txt', (err, data) => {
//    console.log(data.toString());
// });

//console.log('end');

const users = await User.findAll(); 
res.render('pages/users', { users });