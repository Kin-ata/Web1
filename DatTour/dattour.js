// JS Doc
function DatTour()
{
    if(txtHoTen.value==""||txtHoTen==null)
    {
        thongbao.innerText="Bạn chưa nhập họ tên";
        txtHoTen.focus();
        return false;
    }
    if(txtDiaChi.value==""||txtDiaChi==null)
    {
        thongbao.innerText="Bạn chưa nhập địa chỉ";
        txtDiaChi.focus();
        return false;
    }
    if(txtDienThoai.value==""||txtDienThoai==null)
    {
        thongbao.innerText="Bạn chưa nhập số điện thoại";
        txtDienThoai.focus();
        return false;
    }
    /* check rdoPhuongTien*/
        {
        var rdoPhuongTien = document.getElementsByName("rdoPhuongTien");
        var check = false;
        for(var i=0;i<rdoPhuongTien.length;i++)
        {
            if(rdoPhuongTien[i].checked)
            {
                check = true;
                break;
            }
        }
        if(!check)
        {
            thongbao.innerText="Bạn chưa chọn phương tiện";
            return false;
        }
        }
    if((txtNguoiLon.value==""||txtNguoiLon==null) && (txtTreEm.value==""||txtTreEm==null))
    {
        thongbao.innerText="Bạn chưa nhập số lượng đoàn khách";
        txtNguoiLon.focus();
        return false;
    }
    else
    {
        thongbao.innerText="Bạn đã đăng ký thành công!!!";
        txtHoTen.select();
        return false;
    }
}