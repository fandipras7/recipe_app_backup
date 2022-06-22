import React from "react";
import MyLayout from "../../component/layout/MyLayout";
import styles from "./home.module.css";
import Input from "../../component/base/Input";
import Button from "../../component/base/Button";
import Footer from "../../component/module/Footer";

const Home = () => {
  return (
    <>
      <div className="container-fluid position-relative">
        <div className={styles.sideColor}></div>
        <MyLayout title="Home">
          <div className={styles.children + " row align-items-center mt-5"}>
            <div className="col-6 text-center">
              <p className="fs-3 fw-bold">
                Discover Recipe <br />& Delicious Food
              </p>
              <Input backgroundColor="light" className="p-3" placeholder="search restaurant, food"></Input>
            </div>
            <div className="col-6">
              <img className="img-fluid" src="/assets/img/image_1.png" alt="" />
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col">
              <p className={styles.popular + " fs-3"}>Popular for you</p>
            </div>
            <div className="col position-relative">
              <div className="row align-items-center">
                <div className="col-6">
                  <div>
                    <img className={styles.img + " img-fluid"} src="assets/img/image_2.png" alt="" />
                  </div>
                  <div>
                    <img className={styles.frame + " img-fluid"} src="assets/img/frame_1.png" alt="" />
                  </div>
                </div>
                <div className="col-6 position-relative">
                  <div className={styles.title}>
                    <p className=" fs-4">
                      Healthy Bone Broth
                      <br />
                      Ramen (Quick & Easy) <br />
                    </p>
                    <img className="" src="/assets/img/Line.png" alt="" />
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                    <Button backgroundColor="#EFC81A" color="white" border="none" className="p-2">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col">
              <p className={styles.popular + " fs-3"}>New Recipe</p>
            </div>
            <div className="col position-relative">
              <div className="row align-items-center">
                <div className="col-6">
                  <div>
                    <img className=" img-fluid" src="assets/img/kotak.png" alt="" />
                  </div>
                  <div>
                    <img className={styles.frame_2 + " img-fluid"} src="assets/img/image_3.png" alt="" />
                  </div>
                </div>
                <div className="col-6 position-relative">
                  <div className={styles.title}>
                    <p className=" fs-4">
                      Healthy Bone Broth
                      <br />
                      Ramen (Quick & Easy) <br />
                    </p>
                    <img className="" src="/assets/img/Line.png" alt="" />
                    <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</p>
                    <Button backgroundColor="#EFC81A" color="white" border="none" className="p-2">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col">
              <p className={styles.popular + " fs-3"}>New Recipe</p>
            </div>
            <div className="row row-cols-3 justify-content-center">
              <div className={styles.frameImage + " col mb-4 position-relative"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
                <p className={styles.recipeName + " fs-4"}>
                  Chiken <br /> Kare
                </p>
              </div>
              <div className={styles.frameImage + " col"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
              </div>
              <div className={styles.frameImage + " col"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
              </div>
              {/* <div className={styles.frameImage + " col"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
              </div>
              <div className={styles.frameImage + " col"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
              </div>
              <div className={styles.frameImage + " col"}>
                <img className="img-fluid" src="assets/img/chiken_kare.png" alt="" />
              </div> */}
            </div>
          </div>
        </MyLayout>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export default Home;
