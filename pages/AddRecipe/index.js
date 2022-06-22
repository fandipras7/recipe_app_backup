import React, { useState } from "react";
import MyLayout from "../../component/layout/MyLayout";
import Input from "../../component/base/Input";
import Button from "../../component/base/Button";
import { useRouter } from "next/router";
import axios from "axios";

const AddRecipe = () => {
  const router = useRouter();
  const [dataRecipe, setDataRecipe] = useState({
    title: "",
    ingredients: "",
    image: "",
    video: "",
  });

  const handleChange = (e) => {
    setDataRecipe({
      ...dataRecipe,
      [e.target.name]: e.target.value,
    });
  };
  const [imagePriview, setImagePriview] = useState("assets/img/imagePreview.png");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setDataRecipe({
      ...dataRecipe,
      image: file,
    });
    setImagePriview(URL.createObjectURL(file));
  };

  const uploadVideo = (e) => {
    const file = e.target.files[0];
    setDataRecipe({
      ...dataRecipe,
      video: file,
    });
  };

  //   console.log(dataRecipe);

  async function fetchData(dataform) {
    try {
      const result = await axios.post("http://localhost:4000/v1/recipes", dataform, { "content-type": "multipart/form-data" });
      const recipes = result.data.data;
      console.log(recipes);
    } catch (error) {
      console.log(error);
    }
  }

  const handleAddProduct = (e) => {
    const data = new FormData();
    data.append("title", dataRecipe.title);
    data.append("image", dataRecipe.image);
    data.append("ingredients", dataRecipe.ingredients);
    data.append("video", dataRecipe.video);
    e.preventDefault();
    fetchData(data);
  };

  return (
    <>
      <MyLayout title="Add Recipe">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <div>
                <img className="img-fluid" src={imagePriview} alt="" />
              </div>
              <input type="file" className="form-control" accept="image/" onChange={(e) => uploadImage(e)} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <Input onChange={handleChange} border="none" width="100%" placeholder="title"></Input>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <textarea style={{ height: "250px" }} /*value={dataProduct.description} */ name="ingredients" onChange={handleChange} class="form-control" placeholder="Ingredients" aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mt-5 text-center">
              <input type="file" className="form-control" accept="video/" onChange={(e) => uploadVideo(e)} />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Button
              onClick={(e) => {
                handleAddProduct(e);
                // router.push("/Home");
              }}
              width="20%"
              border="none"
              backgroundColor="#EFC81A"
            >
              Next
            </Button>
          </div>
        </div>
      </MyLayout>
    </>
  );
};

export default AddRecipe;
