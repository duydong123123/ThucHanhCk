$(document).ready(function () {
    var i = 1; // Khởi tạo số thứ tự
    $("#btn2").click(function () {
        $("#myModal").modal();
    });
    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("#tbName").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("nỗi ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").htal("*");
        return true;
    }
    function KiemTraQueQuan() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#QQ").val() == "") {
            $("#tbQQ").html("Không để trống");
            return false;
        }
        if (!mauKT.test($("#QQ").val())) {
            $("#tbQQ").html("Mði ký tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbQQ").html("*");
        return true;
    }
    $("#QQ").blur(KiemTraQueQuan);
    function kiemtraSDT() {
        var maukt = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#sdt").val() == "") {
            $("#tbsdt").html("Khong De Trong");
            return false;
        }
        if (!maukt.test($("#sdt").val())) {
            $("#tbsdt").html("Theo Dang 09xx-xxx-xxx trong do so la x tu 0-9");
            return true;
        }
        $("#tbsdt").html("*");
        return true;
    }
    $("#sdt").blur(kiemtraSDT);

    function KTMail() {
        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+(\.\w{2,3})+$/;
        if ($("#txtMail").val()=="") {
            $("#tbMail").html("*Bắt buộc nhập!!");
            return false;
        }
        if (!mail.test($("#txtMail").val())) {
            $("#tbMail").html("*Nhập đúng định dạng mail");
            return false;
        }
        $("#tbEmail").html("*");
            return true;
    };
    $("#txtMail").blur(KTMail);

    $("#Save").click(function () {
        if (kiemTraTen() == true && kiemTraSDT() == true && KTMail() == true && KiemTraQueQuan() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row += "<th>" + S("#QQ").val() + "</th>";
            row += "<th>" + $("#SDT").valO + "</th>";
            row += "<th>" + $("#Mail").valO + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
    })
