// JS Doc
function GuiThongTin()
{
    if(txtTenDN.value==""||txtTenDN==null)
    {
        thongbao.innerText="Bạn chưa nhập tên đăng nhập";
        txtTenDN.focus();
        return false;
    }
    if(txtMK.value==""||txtMK==null)
    {
        thongbao.innerText="Bạn chưa nhập mật khẩu";
        txtMK.focus();
        return false;
    }
    if(txtTenDN.value=="Yến Trần" && txtMK.value=="123456")
    {
        alert("Chào bạn "+txtTenDN.value);
        return true;
    }
    else
    {
        thongbao.innerText="Thông tin đăng nhập không hợp lệ";
        txtTenDN.select();
        return false;
    }
}
function LamLai()
{
    thongbao.innerText="";
    txtTenDN.focus();
}