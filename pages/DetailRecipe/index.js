import React from "react";
import Navbar from "../../component/module/Navbar";
import Footer from "../../component/module/Footer";
import styles from "./detail.module.css";
import Button from "../../component/base/Button";

const DetailRecipe = () => {
  return (
    <div className="position-relative">
      <Navbar></Navbar>
      <div className="mb-5">
        <div className="container">
          <div className="row justify-content-center mt-5 text-center">
            <p className="fs-3">Loream Sandwich</p>
            <div className={styles.frameImage + "  position-relative"}>
              <img className="img-fluid" src="assets/img/image_1.png" alt="" />
              <div className={styles.frameLike}>
                <img src="assets/img/like.png" alt="" />
              </div>
              <div className={styles.frameLampir}>
                <img src="assets/img/lampikan.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <p className="fs-5">Ingredients</p>
              <p>- Capcai</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <p className="fs-5">Video step</p>
              <Button backgroundColor="#EFC81A">
                <i class="bi bi-play-fill"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DetailRecipe;
