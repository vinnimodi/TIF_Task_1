import "./App.css";
import vanlogo from "./images/Screenshot_669 1.png";
// import vector from "./images/Vector 1.png";
import pizza from "./images/Rectangle 400.png";
import pharma from "./images/pharma.png";
import vanlogo2 from "./images/Screenshot_669 2.png";
import path1 from "./images/Path 1.png";
import path2 from "./images/Path 2.png";
import path3 from "./images/Path 3.png";
import links from "./images/Food Truck.png";
import tomato from "./images/grilled-tomatoes.png";
import premeal from "./images/meal-prep.png";
import postmeal from "./images/meal-prep2.png";
import soup from "./images/soup.png";
import corn from "./images/corn.png";
import taco from "./images/taco.png";
import rec417 from "./images/Rectangle 417.png";

function App() {
  return (
    <>
      <div className="App">
        <div className="vanlogo">
          <img src={vanlogo} alt="Logo" />
        </div>
        <div className="bestfood">
          Discover the <br />
          <span style={{ color: "red" }}>Best </span>
          Food <br />
          and Drinks
        </div>
        <div className="explorebutton">
          <span>Explore Now!</span>
        </div>
        <div className="getintouch">Get in Touch</div>
        <div className="pizza">
          <img src={pizza} alt="pizza" />
        </div>
        <svg
          width="752"
          height="839"
          viewBox="0 0 752 839"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
            fill="#E23744"
          />
        </svg>
        <div className="natural">
          Naturally made Healthcare Products for the
          <br />
          better care & support of your body.
        </div>
        {/* <div className="rec404"> */}
        <div className="rec409">
          <div id="pharma">
            <img src={pharma} alt="pharma" />
          </div>
          <div id="frame6">
            <div id="frame3">
              <div id="frame2">
                <div className="about">About Us</div>
                <div id="lorem1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. t has survived not only five centuries.
                </div>
              </div>
              <div id="readmoreabout">Read More</div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="latest">Latest Articles</div>
        <div className="food">
          <div className="foodcard tomato">
            <img src={tomato} alt="tomato" />
            <br />
            <br />
            Grilled Tomatoes at Home
            <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>
          <div className="foodcard post">
            <img src={premeal} alt="post" />
            <br />
            <br />
            Post-workout Recipes
            <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>
          <div className="foodcard pre">
            <img src={postmeal} alt="pre" />
            <br />
            <br />
            Snacks for Travel
            <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>

          <div className="foodcard soup">
            <img src={soup} alt="soup" />
            <br />
            <br />
            Broccoli Cheese Soup <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>
          <div className="foodcard corn">
            <img src={corn} alt="corn" />
            <br />
            <br />
            How To Grill Corn
            <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>
          <div className="foodcard taco">
            <img src={taco} alt="taco" />
            <br />
            <br />
            Crunchwrap Supreme <br />
            <br />
            <div id="loremfood">
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </div>
            <div className="readdown">Read More</div>
          </div>
        </div>
        <div id="rec19">
          <div className="vanlogo2">
            <img src={vanlogo2} alt="vanlogo2" />
          </div>
          <div id="grp177">
            <span className="contactus">Contact Us</span>
            <div className="c">
              <span id="c1">
                Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
                Market, XYZ-343434
              </span>
              <span id="c2">example2020@gmail.com</span>
              <span id="c3">(904) 443-0343</span>
            </div>
          </div>
          <div id="grp176">
            <div className="more">More</div>
            <div className="m">
              <div id="m1">About Us </div>
              <div id="m2">Products</div>
              <div id="m3">Career</div>
              <div id="m4">Contact Us</div>
            </div>
          </div>
          <div id="grpsocial">
            <div className="social">Social Links</div>
            <div id="grpicons">
              <div class="path3">
                <img src={path3} alt="insta" />
              </div>
              <div class="path2">
                <img src={path2} alt="tweeter" />
              </div>
              <div class="path1">
                <img src={path1} alt="fb" />
              </div>
            </div>
          </div>
          <div className="links">© 2022 Food Truck Example</div>
          {/* footer */}
        </div>
      </div>
    </>
  );
}

export default App;

// {/* <div id="compfb">
//   <div id="rec392">
//     <div className="path1">
//       <img src={path1} alt="fb" />
//       </div>
//       </div>
//       </div>
//       <div id="frame7">
//   <div id="rec393">
//   <div className="path2">
//   <img src={path2} alt="tweeter" />
//   </div>
//   </div>
//   </div>
// <div id="rec391">
// <div className="path3">
//     <img src={path3} alt="insta" />
//     </div>
//   </div> */}
