import React, { Component } from "react";

export default class ModalSanPham extends Component {
  renderUpdateCart = () => {
    let { currentArrCart, tangHoacGiam, deleteArrCart } = this.props;
    return currentArrCart.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.maSP}</td>
          <td>
            <img width={50} height={50} src={prod.hinhAnh} alt="" />
          </td>
          <td>{prod.tenSP}</td>
          <td>
            <button
              style={{ width: "40px", height: "40px", marginRight: "5px" }}
              className="btn btn-success"
              onClick={() => {
                tangHoacGiam(prod.maSP, true);
              }}
            >
              +
            </button>
            {prod.soLuong}
            <button
              style={{ width: "40px", height: "40px", marginLeft: "5px" }}
              className="btn btn-danger"
              onClick={() => {
                tangHoacGiam(prod.maSP, false);
              }}
            >
              -
            </button>
          </td>
          <td>{prod.giaBan}</td>
          <td>{prod.giaBan * prod.soLuong}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteArrCart(prod.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        {/* Button trigger modal */}
        {/* <button
            type="button"
            className="btn btn-primary btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#modelId"
          >
            Launch
          </button> */}
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <table className="table table-borderless">
                  <thead className="table-dark">
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>Hình ảnh</th>
                      <th>Tên sản phẩm</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderUpdateCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}></td>
                      <th>Tổng tiền</th>
                      <td>{this.props.currentArrCart.reduce((tongtien,prod,index)=>{
                        return tongtien+=prod.giaBan * prod.soLuong
                      },0)}VND</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
