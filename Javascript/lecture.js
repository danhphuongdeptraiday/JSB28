// console.log("Hello World");
// console.log("Hehe");
// console.log(10);

// String => chuỗi ký tự là tập hợp các ký tự viết dc viết cạnh nhau, vd: "hkjn@#$^%%$"
// Number => số
// Boolean => true/false
// undefined => chua dc dinh nghia
// null

// 1. Cách để khai báo 1 biến trong JS (let, const, var);
// let tên biến = giá trị

// let myName = "Minh";
// myName = "Phát";
// myName = "Ninh";
// myName = 10;
// myName = 1000;
// console.log(typeof myName);

// let n1 = false;
// consn2g(typeof check1);

// let check2 = "true";
// console.log(typeof check2);

// let check3 = "10";
// console.log(typeof check3);

// let check4 = 10;
// console.log(typeof check4);

// let myName = "Nguyễn Danh Phương";
// console.log("Tôi tên là " + myName);

// Chữa bài:
// let myName = "Phương"; // không thể khai báo tên biến trùng nhau
// let myAge = 22;
// let doHomework = true;

// console.log("Tên của tôi là " + myName);
// console.log("Năm nay tôi " + myAge + " tuổi");
// console.log("Trạng thái bài tập về nhà của tôi là: " + doHomework);

// Cách 1
// let text1 = "Tên của tôi là " + myName;
// let text2 = ". Năm nay tôi " + myAge + " tuổi";
// let text3 = ". Trạng thái bài tập về nhà của tôi là: " + doHomework;
// console.log(text1 + text2 + text3);

// console.log(
//   "Tên của tôi là " +
//     myName +
//     ". Năm nay tôi " +
//     myAge +
//     " tuổi" +
//     ". Trạng thái bài tập về nhà của tôi là: " +
//     doHomework
// );

// 2. Prompt trong jS
// let t = prompt("Enter something");
// console.log(typeof t);
// alert("Nội dung bạn vừa nhập là " + t);

// 3. Ép kiểu trong JS:
// let n = 10;
// n = String(n); // => n = "10"
// n = Number(n); // => n = 10
// n = Boolean(n);
// console.log(typeof n);

// 4. Toán tử trong JS: +, -, *, /, **, Math.sqrt()
// let a = "10";
// let b = "2";
// let c = a + b; // =>
// console.log("Count = " + c);

// Bài tập: Tinh diện tích hình thang, dayLon = 10, dayBe = 5, chieuCao = 8

// let dLon = 10;
// console.log("Đáy lớn = " + dLon);
// let dBe = 5;
// console.log("Đáy bé = " + dBe);
// let chieuCao = 8;
// console.log("Chiều cao = " + chieuCao);
// let s = ((dLon + dBe) * chieuCao) / 2;

// console.log("Diện tích hình thang = " + s + " (cm)");
// console.log(
//   `Diện tích hình thang = ((${dLon} + ${dBe}) * ${chieuCao}) / 2 = ${s} (cm)`
// );

// let n = Number(prompt("enter random number ")); // n có kiểu dữ liệu là String
// let c = n + 100;
// console.log(c);

// console.log("Căn của 100 = " + Math.sqrt(100));

// let a = Number(prompt("Enter a = "));
// let b = Number(prompt("Enter b = "));
// let c = Number(prompt("Enter c = "));

// let p = (a + b + c) / 2;

// let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
// alert(`Diện tích hình tam giác = ${s} (cm)`);

// 5. So sánh trong JS:
/*
   == : so sánh xem 2 giá trị có giống nhau k hông
   != : so sánh xem 2 giá trị có khác nhau không
   <  : so sánh xem cái nào nhở cái nào
   >  : so sánh xem cái nào nhở cái nào
   <= :
   >= :
   ===: so sánh xem giá trị có giống nhau không và kiểu dữ liệu có giống nhau k
   !==:
   && : So sánh và => thỏa mãn 2 điều kiện trước sau dấu &&
   || : Hoặc cái này đúng hoặc cái kia đúng
*/

// let n1 = 10;
// let n2 = "10";
// let check1 = n1 == n2; // => true ?
// let a = "Phương";
// let b = "Phương";
// let check2 = a == b;
// let check = check1 && check2;
// console.log(check);

// 6. If/ else
// if(điều kiện) {
//       nếu điều kiện trong if đúng thì thực thi câu lệnh trong hàm if
//} else {
//       nếu điều kiện trong if sai thì sẽ thực hiện câu lệnh trong else
//}

// let name = prompt("Enter name to check ? "); // => check = true
// if (name == "Phương") {
//   console.log("Đúng tên của mình rồi");
// } else {
//   console.log("Nhầm tên rồi, tôi của tôi khác cơ");
// }

// let crushName = prompt("Enter Mạnh's crush ?");
// if (crushName == "Đức") {
//   console.log(crushName + " là crush thứ 1 của Mạnh");
// } else if (crushName == "Mạnh") {
//   console.log(crushName + " là crush thứ 2 của Mạnh");
// } else {
//   console.log(crushName + " không phải là người Mạnh thích");
// }

// let age = Number(prompt("Enter a random age from 6 -> 18 ? "));

// if (age > 5 && age <= 10) {
//   alert(age + " là đang học cấp 1");
// } else if (age > 10 && age <= 15) {
//   alert(age + " là đang học cấp 2");
// } else if (age > 15 && age <= 18) {
//   alert(age + " là đang học cấp 3");
// } else {
//   alert("Nhập sai khoảng tuổi");
// }
