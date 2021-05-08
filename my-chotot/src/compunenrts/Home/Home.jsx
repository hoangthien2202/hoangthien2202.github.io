import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../Home/style.css'
import axios from 'axios';
// import Stile from './stile';

class Home extends Component {
    // State of your application
    state = {
      restaurants: [],
      error: null,
    };
  
    // Fetch your restaurants immediately after the component is mounted
    componentDidMount = async () => {
      const { data } = await axios.post('http://localhost:1337/auth/local', {
        identifier: 'reader@strapi.io',
        password: '123123',
      });
      
      console.log(data);
    };
    render() {
        return (
            <div>
                {/* Category */}
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 categories">
                      <h3 className="col tittle">Khám phá danh mục</h3>
                  </div>
                </div>
                {/* End Category */}
                {/* New Post */}  
                <div className="container">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-10 new-posts">
                      <h3 className="col tittle">Tin đăng mới</h3>
                      <div className="total-items">
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        {/* <Stile/> */}
                        <div className="items">
                          <Link to="/chitietsp">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                          </Link>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                        <div className="items">
                          <img src="./images/iphone-x.jpg" width="100%" alt="" />
                          <div className="items-body">
                            <a className="items-tittle" href="/">Iphone X 256GB</a>
                            <p className="items-price">10.500.000 đ</p>
                            <div className="items-description d-inline-flex ">
                              <img className src="./images/user-ava.png" width="10%" alt="" />
                              <span className="items-last-upload">4 phút trước</span>
                              <span className="items-location">Tp Hồ Chí Minh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  {/* End New Post */}
            </div>
            </div>
        );
    }
}

export default Home;