//Cách lưu trữ trên local

//Kiểu dữ liệu JSON là gì? ứng dụng của nó
// 1. Chuyển đổi kiểu dữ liệu JavaScript sang kiểu JSON
let user = {
    id:1,
    name:"Nguyễn Văn A",
    age:21,
    
};

let users = [
    {
        id:1,
        name:"Nguyễn Văn A",
        age:21,
        
    },
    {
        id:2,
        name:"Nguyễn Văn B",
        age:22,
        
    },
];




// let userJson = JSON.stringify(user);
// console.log("Dữ liệu sau khi chuyển đổi:", userJson);
// console.log("Dữ liệu sau khi chuyển đổi:", ageLocal);

//2. Chuyển đổi từ kiểu JSON sang JS
// let userJS = JSON.parse(userJson);
// console.log("Dữ liệu sau khi chuyển đổi:", userJS);


//Lưu trữ dữ liệu trên local
localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("users",JSON.stringify(users));

//lấy dữ liệu từ localStorage
let listUser = localStorage.getItem("users");
let listUserParser = JSON.parse(listUser);
console.log(listUser);
console.log(listUserParser);

//Xóa dữ liệu của localStorage theo key
localStorage.removeItem("user");

//Xây dựng ứng dụng todo list
//1. thêm mới công việc lên local và hiển thị danh sách ra ngoài giao diện
//2. Khi click vào nút xóa thì hiển thị modal xác nhận xóa. Nếu cancel thì không xóa, nếu ok thì xóa
//3. Khi click vào nút sửa thì hiển thị tên công việc lên ô input và tiến hành sửa


//Thêm mới sessionStorage
const userLogin = {
    id: 1,
    name: "Nguyễn Văn A",
};

sessionStorage.setItem("userLogin",JSON.stringify(userLogin));