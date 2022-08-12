import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'


export default class SanPhamGioHang extends Component {
  render() {
    let {sanPhamCT} = this.props;
    return (
      
      <div className="row mt-4">
        <div className="col-4">
          <h3 className="title">{sanPhamCT.tenSP}</h3>
          <img className='w-100' src={sanPhamCT.hinhAnh} alt="..." />
        </div>
        <div className="col-8">
      <table className="table text-left">
        <thead>
          <tr>
            <th>Thông số kỹ thuật</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Màn Hình</td>
            <td>{sanPhamCT.manHinh}</td>
          </tr>
          <tr>
            <td>Hệ Điều Hành</td>
            <td>{sanPhamCT.heDieuHanh}</td>
          </tr>
          <tr>
            <td>Camera Trước</td>
            <td>{sanPhamCT.cameraTruoc}</td>
          </tr>
          <tr>
            <td>Camera Sau</td>
            <td>{sanPhamCT.cameraSau}</td>
          </tr>
          <tr>
            <td>Ram</td>
            <td>{sanPhamCT.ram}</td>
          </tr>
          <tr>
            <td>Rom</td>
            <td>{sanPhamCT.rom}</td>
          </tr>
        </tbody>
      </table>
      </div>
      </div>
      
      
    )
  }
}
