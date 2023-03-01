var canVote = function(age) {
    
    var result = "no, can't vote";

    if (age === 18) {
        result = "yay, start voting";
    } else if (age > 18) {
        result = "please vote";
    }

    return result;

} 

console.log(canVote(12));
console.log(canVote("12"));
console.log(canVote(17));
console.log(canVote('@18'));
console.log(canVote(18));
console.log(canVote(28));
