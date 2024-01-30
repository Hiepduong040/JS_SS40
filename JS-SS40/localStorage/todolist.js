let $ = document.querySelector.bind(document);
//bind-ràng buộc chính phần tử
let $$ = document.querySelectorAll.bind(document);
//tạo mảng lưu trữ
let listJob = JSON.parse(localStorage.getItem("jobs")) || [];

//Thêm mới công việc
function createJob(){
    //Lấy giá trị từ ô input
    let inputValue = $("#inputValue").value;
    
    //Những giá trị là False: undefined, null, NaN, 0, -0, 0n, ""(Empty string value), false.
    if (!inputValue){
        alert("Tên công việc ko đc để trống");
    }else{
        //thiết kế đối tượng công việc
        const job = 
        {
            id: Math.ceil(Math.random() * 10000000),
            name: inputValue,
            status: false,
        };

        //push cv vào mảng
        listJob.push(job);

        //Lưu dữ liệu lên local
        localStorage.setItem("jobs",JSON.stringify(listJob));

        //Clear dữ liệu trong ô input
        $("#inputValue").value = "";

        //Gọi hàm render danh sách công việc
        render();
    }

    
    

    

}


//Lắng nghe sự kiện submit form
$("#form").addEventListener("submit", (e)=> {
    //Ngăn chặn sự kiện load lại trang của form
    e.preventDefault();
    createJob();
})

//Hiển thị danh sách công việc
function render() {
    let ulHtmls = listJob.map(function(job) {
        return `
        <li>
        <span>${job.name}</span>
        <button>Sửa</button>
        <button onclink="handleDelete(${job.id})">Xóa</button>
        </li>
        `;
    });
    //Chuyển đổi mảng thành chuỗi HTML
    let ulHtml = ulHtmls.join("");
    
    //Gắn dữ liệu vào trong DOM
    $("#listJob").innerHTML = ulHtml;
    
}

render();



//Xóa công việc
function handleDelete(id){
    //Lọc ra những bản ghi có id khác với id cần xóa
    let newListJob = listJob.filter(function(job){
        return job.id != id;
    });

   //lưu mới dữ liệu
   localStorage.setItem("jobs", JSON.stringify(newListJob));

   render();
}

//Cập nhật


//map(): DÙng để lập qua các phần tử của mảng, trả về một mảng mới
//có sô lượng phần tử = số lượng phần tử của mảng cũ nhưng được thay đổi



