import React from "react";
import Navbar from "../../component/module/Navbar";
import Footer from "../../component/module/Footer";
import styles from "./detail.module.css";
import Button from "../../component/base/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

const DetailRecipe = () => {
  const router = useRouter();
  // const id = router.query.id;
  // console.log(id);

  const [recipes, setRecipes] = useState([]);
  async function fetchData(id) {
    try {
      const result = await axios({
        method: "GET",
        baseURL: "http://localhost:4000/v1",
        url: `/recipes/${id}`,
      });
      const recipes = result.data.data;
      setRecipes([...recipes, recipes]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData(router.query.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="position-relative">
      <Navbar></Navbar>
      <div className="mb-5">
        <div className="container">
          <div className="row justify-content-center mt-5 text-center">
            <p className="fs-3">Loream Sandwich</p>
            <div className={styles.frameImage + "  position-relative"}>
              <img className="img-fluid" src={recipes.image} alt="" />
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
                <i className="bi bi-play-fill"></i>
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
