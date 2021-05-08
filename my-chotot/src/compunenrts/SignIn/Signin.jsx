import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../SignIn/style.css'


const Signin = ({loginAccount})=> {
        

        return (
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4 signin mx-auto">
                        <div className="tittle d-flex justify-content-between">
                            <div className="tittle-text">
                            <h3>Đăng nhập</h3>
                            <p>Chào bạn quay lại</p>
                            </div>
                            <img src="../../images/logo.svm" alt="" />
                        </div>
                        <div className="body text-center">
                            <form className="form-signin ">
                            <div className="form-label-group">
                                <input onChange={ handleChangeEmail } type="numberphone" id="inputEmail" className="form-control" placeholder="Nhập SĐT của bạn" required autofocus />
                                <label htmlFor="inputPhone" />
                            </div>
                            <div className="form-label-group">
                                <input onChange={handleChangePassword} type="password" id="inputPassword" className="form-control" placeholder="Nhập mật khẩu của bạn" required />
                                <label htmlFor="inputPassword" />
                            </div>     
                            <div className="btn btn-md btn-primary btn-block">
                                <a onClick={(e)=>{loginAccount({identifier:{email},password:{password}})}} className="btn btn-primary button-effect" href="#">Đăng nhập</a>
                            </div>
                            <a className="forget-password" href="/">Bạn quên mật khẩu?</a>
                            <p>hoặc sử dụng</p>                             
                            <ul className="social-button d-flex flex-inline justify-content-center padding-0">
                                <li><a href="/"><img src="../images/facebook.svg" alt="" /></a></li>
                                <li><a href="/"><img src="../images/google.svg" alt="" /></a></li>
                                <li><a href="/"><img src="../images/apple.svg" alt="" /></a></li>
                            </ul>
                            <p>Chưa có tài khoản?  <Link to="/dangky">Đăng ký ngay</Link></p>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>


        );
    
}
let email;
let password;
function handleChangeEmail(e) {
    email= (e.target.value);
}
function handleChangePassword(e){
    password= (e.target.value);
}

export default Signin;