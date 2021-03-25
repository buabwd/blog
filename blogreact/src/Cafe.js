import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Home/navbar';
import Review from './components/Review Cafe/Reviewblog';
import './index.css'
import image1 from "./image/img-cafe1.jpeg"
import image2 from "./image/img-cafe3.jpeg"
import image3 from "./image/img-cafe4.jpeg"
import './CSS/Cafe.css';



function Cafe() {
    return (
        <div>
            <Navbar />
            <section class="design" id="design">
                <div class="container">
                    <div class="title">
                        <h2>Recent Cafe Review</h2>
                        <p>recent cafe review on the blog</p>
                    </div>
                    <div class="design-content">

                        <div class="design-item">
                            <div class="design-img">
                                <img src={image1} alt=" " />
                                <span><i class="far fa-heart"></i> 25</span>
                                <span>Cafe</span>
                            </div>
                        </div>

                        <div class="design-item">
                            <div class="design-img">
                                <img src={image2} alt=" " />
                                <br />
                                <span><i class="far fa-heart"></i> 20</span>
                                <span>Cafe</span>
                            </div>

                        </div>

                        <div class="design-item">
                            <div class="design-img">
                                <img src={image3} alt=" " />
                                <span><i class="far fa-heart"></i> 22</span>
                                <span>Cafe</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <div class="container">
                <div class="title">
                    <h2>Cafe</h2>
                    <p>recent blog about review cafe</p>
                </div>
                <div class="blog content">
                    <Review />
                </div>
            </div>
            </div>
    );
}

export default Cafe;
