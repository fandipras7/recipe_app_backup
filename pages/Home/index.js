import React, { useEffect } from "react";
import MyLayout from "../../component/layout/MyLayout";
import styles from "./home.module.css";
import Card from "../../component/base/Card";
import Input from "../../component/base/Input";
import Button from "../../component/base/Button";
import Footer from "../../component/module/Footer";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

const Home = ({ recipes, pagination }) => {
  const router = useRouter();
  const [page, setPage] = useState({
    page: pagination.page,
    limit: pagination.limit,
  });
  const [keySearch, setKeySearch] = useState("");

  const onHandleChange = (e) => {
    setKeySearch((e.target.name = e.target.value));
  };

  const onHandleSearch = () => {
    router.push(`?search=${keySearch}`);
  };

  const buttonPagination = [];
  for (let i = 0; i < pagination.totalPage; i++) {
    buttonPagination.push(
      <button
        onClick={() => {
          setPage((current) => ({ ...current, page: i + 1 }));
          router.push(`?page=${i + 1}&limit=${page.limit}`);
        }}
      >
        {i + 1}
      </button>
    );
  }

  const option = ["ASC", "DESC"];

  // const [recipes, setRecipes] = useState([]);
  // async function fetchData() {
  //   try {
  //     const result = await axios({
  //       method: "GET",
  //       baseURL: "http://localhost:4000/v1",
  //       url: `/recipes`,
  //     }, {withCredentials:true, headers:{
  //       Cookie:cookie
  //     }});
  //     const recipes = result.data.data;
  //     console.log(recipes);
  //     setRecipes([...recipes, recipes]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   // fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router.query.page]);

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
              <div className="position-relative text-center">
                <Input value={keySearch} onChange={(e) => onHandleChange(e)} backgroundColor="light" className="py-3 px-5" placeholder="search restaurant, food"></Input>
                <Button onClick={onHandleSearch} backgroundColor="white" border="none" className={styles.btnSearch + " text-center"}>
                  <i className="bi bi-search"></i>
                </Button>
                <Button
                  onClick={() => {
                    setKeySearch("");
                  }}
                  backgroundColor="white"
                  border="none"
                  className={styles.btnRemove + " text-center"}
                >
                  <i className="bi bi-x"></i>
                </Button>
              </div>
            </div>
            <div className="col-6">
              <img className="img-fluid" src="/assets/img/image_1.png" alt="" />
            </div>
          </div>
          <div className="row d-flex flex-column">
            <div className="col">
              <p className={styles.popular + " fs-3"}>Library OF Recipe</p>
            </div>
            <div className="row text-center mb-5">
              <div className="">
                <select
                  className="p-2"
                  style={{ border: "none", backgroundColor: "orange" }}
                  onChange={(e) => {
                    e.target.value !== "none" && router.push(`?sortby=${"title"}&sort=${e.target.value}`);
                  }}
                  name="sort"
                  id="sort"
                >
                  <option value="none">Sort</option>
                  <option value="ASC">SortByName(A-Z)</option>
                  <option value="DESC">sortByName(Z-A)</option>
                </select>
              </div>
            </div>
            <div className="row row-cols-3 justify-content-center">
              {recipes.map((item) => (
                <Card
                  key={item.id}
                  img={item.image}
                  title={item.title}
                  onClick={() => {
                    router.push(`/DetailRecipe/${item.id}`);
                  }}
                ></Card>
              ))}
            </div>
          </div>
          <div className="text-center mt-5 mb-5">{buttonPagination}</div>
        </MyLayout>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  // console.log(context);
  let page = 1;
  let limit = 2;
  let search;
  let sort;
  let sortby;
  if (context.query.page || context.query.limit) {
    page = context.query.page;
    limit = context.query.limit;
  }

  if (context.query.search) {
    search = context.query.search;
  }

  if (context.query.sort && context.query.sortby) {
    sort = context.query.sort;
    sortby = context.query.sortby;
  }
  console.log(sort);
  const cookie = context.req.headers.cookie;
  if (!cookie) {
    // Router.replace('/login')
    context.res.writeHead(302, {
      Location: `http://localhost:3000/login`,
    });
    return {};
  }
  const { data: RespData } = await axios.get(`http://localhost:4000/v1/recipes?page=${page}&limit=${limit}${search && `&search=${search}`}${sort && `&sortby=${sortby}&sort=${sort}`}`, {
    withCredentials: true,
    headers: {
      Cookie: cookie,
    },
  });
  // console.log(data);
  return {
    props: {
      recipes: RespData.data,
      pagination: RespData.pagination,
    }, // will be passed to the page component as props
  };
}

export default Home;
