import React, { Component } from "react";
import DanhSachSanPham from "./DanhSachSanPham";
import ModalSanPham from "./ModalSanPham";
import SanPhamGioHang from "./SanPhamGioHang";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/sp_iphoneX.png",
  },
];

export default class BaiTapGioHang extends Component {
  state = {
    currentProd: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    currentArrCart: [],
  };

  addCart = (prod) => {
    let productCart = {
      maSP: prod.maSP,
      tenSP: prod.tenSP,
      giaBan: prod.giaBan,
      soLuong: 1,
      hinhAnh: prod.hinhAnh,
    };
    let id = prod.maSP;
    let updateArrCart = [...this.state.currentArrCart];
    let index = updateArrCart.findIndex((prod) => prod.maSP === id);
    if (index !== -1) {
      updateArrCart[index].soLuong += 1;
    } else {
      updateArrCart.push(productCart);
    }
   
    this.setState({
      currentArrCart: updateArrCart,
    });
    
  };
  

  ChiTietSP = (prod) => {
    console.log(prod);
    this.setState({
      currentProd: prod,
    });
  };

  tangHoacGiam = (id, status) => {
    let updateArrCart = [...this.state.currentArrCart];
    let index = updateArrCart.findIndex((idProd) => idProd.maSP === id);
    if (status === true) {
      updateArrCart[index].soLuong += 1;
    } else {
      if (updateArrCart[index].soLuong > 1) updateArrCart[index].soLuong -= 1;
    }
    this.setState({
      currentArrCart: updateArrCart,
    });
    
  };

  deleteArrCart = (id) => {
    let updateArrCart = [...this.state.currentArrCart];
    let index = updateArrCart.findIndex((idProd) => idProd.maSP === id);
    if (index !== -1) {
      updateArrCart.splice(index, 1);
    }
    this.setState({
      currentArrCart : updateArrCart
    })
  };

  countCart = (soLuong) => {
    let updateArrCart = [...this.state.currentArrCart];
    let index = updateArrCart.findIndex((idProd) => idProd.soLuong === soLuong);
    console.log(updateArrCart[index].soLuong)
    if (soLuong !== -1){
      updateArrCart[index].soLuong += 1;
    }
    this.setState({
      currentArrCart : updateArrCart
    })
  }

  render() {
    let tongSoLuong = this.state.currentArrCart.reduce((tsl,prod,index)=> {
      return tsl +=prod.soLuong;
    },0)
    return (
      <div className="container">
        <div className="text-center text-success">Bài tập giỏ hàng</div>
        <div className="text-end">
          <span
            className="text-danger"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
            style={{ cursor: "pointer" }}
            
          >
            Giỏ Hàng({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPham
          mangSanPham={data}
          ChiTietSP={this.ChiTietSP}
          addCart={this.addCart}
          
        />
        <SanPhamGioHang sanPhamCT={this.state.currentProd} />
        <ModalSanPham
          currentArrCart={this.state.currentArrCart}
          tangHoacGiam={this.tangHoacGiam}
          deleteArrCart={this.deleteArrCart}
        />
      </div>
    );
  }
}
