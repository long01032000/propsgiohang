import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";


export default class DanhSachSanPham extends Component {
   
    renderProductList = () => {
        let {mangSanPham,ChiTietSP,addCart} = this.props;
        return mangSanPham.map((prod,index) => { 
           return (
            <div className="col-4" key={index}>
            <div className="item">
              <div>
                <div className="card" style={{ width: "22rem" }}>
                  <img
                    src={prod.hinhAnh}
                    className="card-img-top"
                    width={300}
                    height={320}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prod.tenSP}</h5>
                  
                    <button className="btn btn-success" style={{marginRight: "10px"}} onClick={() => { ChiTietSP(prod) }}>Chi tiết</button>
                    <button className="btn btn-danger" onClick={() => { 
                      addCart(prod)
                     }}>Thêm giỏ hàng</button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
           )
         })

    }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderProductList()}
        </div>
      </div>
    );
  }
}
