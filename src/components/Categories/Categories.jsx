import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {

      return (
        <div className="cat" id="collection">
        <div className="top">
          <h1>Our Collection</h1>
          <span className="styles_wave__HM_CU">🛒</span>
        </div>
        <div className="categories">
            <div className="row card-wide">
              <img
                src="http://localhost:1337/uploads/small_kussens1_0_74eb0d6685.jpg"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Rugs
                </Link>
              </button>
            </div>

            <div className="row card-tall">
              <img
                src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Poufs
                </Link>
              </button>
            </div>

            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Pillows
                </Link>
              </button>
            </div>

                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                    Rattan
                    </Link>
                  </button>
                </div>

                <div className="row">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                    Tamegroute
                    </Link>
                  </button>
                </div>

                <div className="row card-tall">
                  <img
                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                    Wooden Benches
                    </Link>
                  </button>
                </div>

                <div className="row card-wide">
              <img
                src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                Mirrors
                </Link>
              </button>
            </div>

            <div className="row">
              <img
                src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                Pom Pom Blankets
                </Link>
              </button>
            </div>

            <div className="row card-wide">
              {" "}
              <img
                src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link
">
                  Tiredecorations
                </Link>
              </button>
            </div>

                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                    Designlamp
                    </Link>
                  </button>
                </div>

                {/* <div className="row">
                  {" "}
                  <img
                    src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Accessories
                    </Link>
                  </button>
                </div>

                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Shoes
                    </Link>
                  </button>
                </div>

                <div className="row card-wide">
                  <img
                    src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Shoes
                    </Link>
                  </button>
                </div>

                <div className="row card-tall">
              <img
                src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>

            <div className="row card-wide">
              <img
                src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Women
                </Link>
              </button>
            </div>

            <div className="row">
              {" "}
              <img
                src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link
">
                  New Season
                </Link>
              </button>
            </div>

                <div className="row">
                  <img
                    src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <button>
                    <Link to="/products/1" className="link">
                      Men
                    </Link>
                  </button>
                </div> */}

        </div>
        </div>
      );






  };

export default Categories