import React, { useState } from "react";
import MyLayout from "../../component/layout/MyLayout";
import Input from "../../component/base/Input";
import Button from "../../component/base/Button";

const AddRecipe = () => {
  const [dataRecipe, setDataRecipe] = useState({
    title: "",
    ingredients: "",
    photo: "",
    video: "",
  });

  const [imagePriview, setImagePriview] = useState("assets/img/imagePreview.png");
  return (
    <>
      <MyLayout title="Add Recipe">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <div>
                <img className="img-fluid" src={imagePriview} alt="" />
              </div>
              <input type="file" className="form-control" accept="image/" /*onChange={(e) => uploadImage(e)} */ />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <Input border="none" width="100%" placeholder="title"></Input>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 mt-5 text-center">
              <textarea style={{ height: "250px" }} /*value={dataProduct.description} */ name="description" /*onChange={handleChange}*/ class="form-control" placeholder="Ingredients" aria-label="With textarea"></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mt-5 text-center">
              <input type="file" className="form-control" accept="image/" /*onChange={(e) => uploadImage(e)} */ />
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <Button width="20%" border="none" backgroundColor="#EFC81A">
              Next
            </Button>
          </div>
        </div>
      </MyLayout>
    </>
  );
};

export default AddRecipe;
