let item_one_name = "banana";
let item_one_price = 0.35;
let item_two_name = "strawberry";
let item_two_price = 0.25;

console.log(item_one_name);
console.log(item_one_price);
console.log(item_two_name);
console.log(item_two_price);

let user_points = 45;
let is_member = true;
let user_name = "Alex";

if(user_points >= 75){
    console.log("You did it! You have so many points!");
} else if(user_points >= 50) {
    console.log("Keep going, almost at 75!");
} else {
    console.log("Keep going, get more points!");
}


if(is_member === true && user_points >= 90){
    console.log("You are a talented member!");
}

if(is_member === false || user_points < 10) {
    console.log("Sorry, you are either not a member, or a very untalented member. You must go.");
}

if(user_name === "Alex"){
    console.log("You are a very special user.");
} else {
    console.log("You are a normal user.");
}

