function Danhsachtv() {
    const thanhvien = [
        { hovaten: "Trương Đức Việt Hoàng", gioitinh: "Nam", Noisinh: "Bắc Ninh" },
        { hovaten: "Nguyễn Tài Thuận", gioitinh: "Nam", Noisinh: "Hà Nội" },
        { hovaten: "Nguyễn Văn Bính", gioitinh: "Nam", Noisinh: "Hà Nội" },
        { hovaten: "Thái Văn Ngọc", gioitinh: "Nam", Noisinh: "Nghệ An" },
        { hovaten: "Nguyễn Quang Huy", gioitinh: "Nam", Noisinh: "Thái Bình" },
        { hovaten: "Chu Văn Tuyên", gioitinh: "Nam", Noisinh: "Nam Định" },
        { hovaten: "Hoàng Tùng Dương", gioitinh: "Nam", Noisinh: "Thanh Hoá" },
    ];

    const danhSach = document.getElementById("danhsachthanhvien");

    thanhvien.forEach((tv) => {
        const div = document.createElement("div");
        div.className = "thanhvien";
        div.innerHTML = `
            <table>
                <tr>
                    <td>Họ và tên:</td>
                    <td>${tv.hovaten}</td>
                </tr>
                <tr>
                    <td>Giới tính:</td>
                    <td>${tv.gioitinh}</td>
                </tr>
                <tr>
                    <td>Nơi sinh:</td>
                    <td>${tv.Noisinh}</td>
                </tr>
            </table>
        `;

        div.style.margin = "20px";
        div.style.padding = "10px";
        div.style.background = "lightgray";
        danhSach.appendChild(div);
    });
}


Danhsachtv();