import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owl.css';  
export class Stile extends Component {  
        render()  
        {  
          return (  
            <div>  
                 <div class='container-fluid' >      
                    <div className="row title" style={{marginBottom: "20px"}} >      
                        <div class="col-sm-12 btn btn-info">      
                         Owl Carousel In React Application   
                        </div>      
                    </div>  
                </div>  
                 <div class='container-fluid' >            
                    <OwlCarousel items={3}  
                         className="owl-theme"  
                          loop  
                         nav  
                        margin={8} >  
                    <div className="item">
                            <div>
                            <img src="/img/batdongsan.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Bất động sản</p>
                            </div>
                            <div>
                            <img src="/img/job.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Việc làm</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/xe.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Xe cộ</p>
                            </div>
                            <div>
                            <img src="/img/pet.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Thú cưng</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/dientu.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Đồ điện tử</p>
                            </div>
                            <div>
                            <img src="/img/noithat.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Đồ gia dụng, nội thất, cây cảnh</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/amthuc.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Đồ ăn, thực phẩm <br /> và các loại khác</p>
                            </div>
                            <div>
                            <img src="/img/dienmay.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Tủ lạnh, máy lạnh, máy giặc</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/giaitri.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Giải trí, Thể thao, <br /> Sở thích</p>
                            </div>
                            <div>
                            <img src="/img/fashion.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Thời trang, Đồ dùng cá nhân</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/babyAndMon.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Mẹ và bé</p>
                            </div>
                            <div>
                            <img src="/img/vanphong.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Đồ dùng văn phòng, công nông nghiệp</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/dulich.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Dịch vụ, Du lịch</p>
                            </div>
                            <div>
                            <img src="/img/all.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Tất cả danh mục</p>
                            </div>
                        </div>
                        <div className="item">
                            <div>
                            <img src="/img/bouns.png" alt="chotot" style={{height: '80px', width: '80px'}} />
                            <p>Cho tặng miễn <br /> phí</p>
                            </div>
                        </div>
                
                    </OwlCarousel> 
      </div>
      </div> 
          );

        }  

      }  

export default Stile;