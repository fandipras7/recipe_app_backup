import React from "react";
import MyLayout from "../../component/layout/MyLayout";
import style from "../../styles/profile.module.css";
import { useState } from "react";
import Link from "next/link";
const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState("my recipe");
  return (
    <>
      <MyLayout title="profile">
        <main>
          <div className={style.profile}>
            <img src="/assets/img/profile.png" alt="" />
            <img src="/asset/svg/edit.svg" className={style.edit} alt="" style={{ cursor: "pointer" }} onClick={() => setEdit((edit) => !edit)} />
            <div className={edit ? style.menu : style.menuActive}>
              <p>
                <Link href="/profile/edit">Change photo profile</Link>
              </p>
              <hr style={{ margin: "0" }} />
              <p>
                <Link href="/profile/edit">Change password</Link>
              </p>
            </div>
          </div>
          <h2 style={{ margin: "40px auto", textAlign: "center" }}>Garneta Sharina</h2>
          <div className={style.navigation}>
            <ul>
              <li className={selected == "my recipe" ? style.recipeActive : ""} onClick={() => setSelected("my recipe")}>
                My Recipe
              </li>
              <li className={selected == "saved recipe" ? style.recipeActive : ""} onClick={() => setSelected("saved recipe")}>
                Saved Recipe
              </li>
              <li className={selected == "liked recipe" ? style.recipeActive : ""} onClick={() => setSelected("liked recipe")}>
                Liked Recipe
              </li>
            </ul>
            {/* <div className={style.area}>{data ? data.map((recipe) => <Card key={recipe.id} title={recipe.title} id={recipe.id} image={recipe.image} />) : <h1>Sorry No Recipe Found</h1>}</div> */}
          </div>
        </main>
      </MyLayout>
    </>
  );
};

export default Profile;
