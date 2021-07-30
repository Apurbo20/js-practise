// var a = "rashedul";
// var b = 5;
// console.log(b.toString(), typeof b);

// var num = "5.659";
// var c = parseInt(num);
// console.log(c);

//============================================================
{
  var number = 2.5678;
  console.log(number.toFixed());
  console.log(number.toFixed(2)); // this value maintain whose to where shown
  console.log(number.toPrecision(1)); //total character show in this way} this function will show as a String.
}

//============================================================

console.log("Saif" + " Ali");
var name = "Saif Ali";
var work = "He is a student";
console.log("my name is " + name + " " + work);
//=============================================================
var text = "Saif";
console.log(text.length);
//user এর ইনপুট এর ভিত্তিতে কিভাবে আউটপূট দেখাব ?
var text1 = prompt("সাইফের ওয়েবসাইটে স্বাগতম 👋 আপনার নাম লিখুন  :");
var text2 = ("ধন্যবাদ আবার আসবেন");
console.log(text1.length);
console.log(text.charAt(5));
var uppercase = "is a web developer";
var lowercase = "LOWERCASE";
var slice = "Saif";
console.log(uppercase.toUpperCase());
console.log(lowercase.toLowerCase());
console.log(uppercase.concat(" " + lowercase));
console.log(slice.slice(0, 3));
//=============================================================

// +   -   *   /   %   ** ++ -- এগুলর কাজ কি ? --a a-- ও ++a a++

var firstNum = prompt(
  "আপনার পছন্দের একটি নাম্বার নির্বাচন করুন ইংরেজিতে  লিখবেন 😁 "
);
var seconfNum = prompt(
  "আবারো পছন্দের একটি নাম্বার নির্বাচন করুন ইংরেজিতে  লিখবেন 😁"
);
firstNum = parseInt(firstNum, 10);
seconfNum = parseInt(seconfNum, 10);
var firstNum, seconfNum;
var sum = firstNum + seconfNum;
var sub = firstNum - seconfNum;
var multi = firstNum * seconfNum;
var devi = firstNum / seconfNum;
var modulas = firstNum % seconfNum;

document.write(
  " হ্যালো  " +
  text1 +
  " আপনি আমাদের আপনার কিছু ডাটা দিয়েছেন সেগুলো হচ্ছে 👇 " +
  "<br/>" +
  " আপনি প্রথম নাম্বার হিসেবে দিয়েছেন 👉 =  " +
  firstNum +
  " আপনি  দ্বিতীয় নাম্বার হিসেবে দিয়েছেন 👉 =  " +
  seconfNum +
  "<br/>" +
  "এবং আপনার যোগফল হলো 👉  " +
  firstNum +
  " + " +
  seconfNum +
  " = " +
  sum +
  "<br/>" +
  "এবং আপনার বিয়োগফল হলো  👉 " +
  firstNum +
  " - " +
  seconfNum +
  " = " +
  sub +
  "<br/>" +
  "এবং আপনার গুণফল হল  👉 " +
  firstNum +
  " * " +
  seconfNum +
  " = " +
  multi +
  " <br/>" +
  "এবং আপনার ভাগফল হল 👉 " +
  firstNum +
  " / " +
  seconfNum +
  " = " +
  devi +
  "<br/>" +
  "এবং আপনার ভাগশেষ হল 👉 " +
  firstNum +
  " % " +
  seconfNum +
  " = " +
  modulas +
  "<br/>" +
  text2 +
  " 💋 "
);
