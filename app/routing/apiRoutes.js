var friends = require('../data/friends.js')
module.exports = function(app){
    app.get('/api/friends', function(req, res){
        res.json(friends)
    });

app.post('/api/friends', function(req, res){
var totalBetween;
var score = 0;
var friendScore = "";
var friend = '';
var match;
var currentInput = req.body;
console.log('the body', req.body);
const userScore = req.body.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);
console.log('the userscores sum', userScore);
friends.forEach(item => {
    if (item.scores.reduce((a, b) => parseInt(a) + parseInt(b), 0) - userScore === 2) {
        friend = item.name;
    }
    console.log('the friend', friend);
});
// for (var i in friends){
//     totalBetween = 0;
//     for (var i = 0; i < friends.length; i++) {
//         console.log(friends[i].name);
//         lowestTotal = 0;

//         for (var j = 0; j < 25; j++) {
//             totalBetween += Math.abs(parseInt(friends[j]) - parseInt(friends[i].scores[j]));

//             if(totalBetween < lowestTotal){
//                 lowestTotal = totalDifference;
//                 match = friends[i]
//             }
//         }}
//         friends.push(currentInput)
//         res.send([match, lowestTotal])
//     }})
    })
};