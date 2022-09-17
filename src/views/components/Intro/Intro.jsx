import React from 'react';
import './style.scss';
import { Row, Col } from 'reactstrap';
const Intro = (props) => {
  return (
    <div className="intro">
      <h1>About Big Data Club</h1>
      <div
        className="container-fluid"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '80%',
          margin: 'auto',
        }}>
        <Row>
          <Col lg="6">
            <div classname="intro__text">
              <p>
                <span style={{ fontWeight: 'bold', color: '#3C60BD' }}>
                  Big Data Club - HCMUT
                </span>{' '}
                được thành lập vào ngày{' '}
                <span style={{ fontWeight: 'bold' }}>31 tháng 10 năm 2021</span>
                , là một câu lạc bộ học thuật dành cho tất cả các bạn sinh viên
                trong khoa Khoa học & Kỹ thuật Máy tính của trường ĐH Bách Khoa
                TP.HCM và những trường ĐH khác.
              </p>
              <p>
                Big Data Club (BDC) được thành lập với mục đích tạo ra một môi
                trường nghiên cứu học thuật chuyên nghiệp dành cho các bạn sinh
                viên có niềm đam mê với các mảng Khoa học dữ liệu, Học máy, Phân
                tích dữ liệu, Tính toán hiệu năng cao, v.v. và được được quản lý
                dưới sự bảo hộ của{' '}
                <span style={{ fontWeight: 'bold', color: '' }}>
                  Phòng Thí nghiệm Tính toán Hiệu năng cao (HPC Lab){' '}
                </span>
              </p>
              <div
                classname="intro__logo"
                style={{ display: 'flex', justifyCotent: 'space-between' }}>
                <img
                  style={{ width: '40%' }}
                  src={require('assets/img/brand/logo_BDC.png')}
                  alt="31 October"
                />
                <img
                  style={{ width: '60%' }}
                  src={require('assets/img/brand/logo_hpc.png')}
                  alt="31 October"
                />
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="intro__img">
              <img
                src={require('assets/img/brand/about-page.png')}
                alt="About Page"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Intro;
