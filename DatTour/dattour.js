//JS Doc
function ValidControl (control, message) {
    if (control.value == "" || control.value == null) {
        alert(message);
        control.focus();
        return false;
    }
    return true;
}
function ValidEmail () {
    var apos = txtEmail.value.indexOf("@");
    var dotpos = txtEmail.value.lastIndexOf(".");
    if (apos < 1 || dotpos - apos < 2) {
        alert("Email không hợp lệ");
        txtEmail.focus();
        return false;
    }
    return true;
}
function ValidPhone () {
    var phone = txtDienThoai.value;
    if (phone.length != 10 || isNaN(phone) || phone.charAt(0) != "0") {
        alert("Số điện thoại không hợp lệ");
        txtDienThoai.focus();
        return false;
    }
    return true;
}
function ValidForm () {
    if (ValidControl(txtHoTen, "Bạn chưa nhập họ tên") == false) {
        return false;
    }
    if (ValidControl(txtDiaChi, "Bạn chưa địa chỉ") == false) {
        return false;
    }
    if (ValidControl(txtEmail, "Bạn chưa nhập email") == false) {
        return false;
    }
    if (ValidControl(txtDienThoai, "Bạn chưa nhập số điện thoại") == false) {
        return false;
    }
    if (ValidPhone() == false) {
        alert("Số điện thoại không hợp lệ");
        txtDienThoai.focus();
        return false;
    }
}
function LamLai(){
    txtHoTen.focus();
}