import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BlogsPart from "../components/BlogsPart";
import { Pagination, Stack } from "@mui/material";
import { mobile } from "../utils/responsive";
import { axiosPublicReq } from "../axiosReqMethods";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setNavbar } from "../redux/navbarReducer";

const BlogContainer = styled.div`
  padding-top: 12vh;

  .pagination {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4vh;
    ${mobile(1921, {
      marginTop: "8vh",
      transform: " scale(1.4)",
    })}
    button, div {
      color: white;
    }
  }
`;

const Header = styled.header`
  text-transform: capitalize;
  color: whitesmoke;
  font-size: 5rem;
  ${mobile(768, {
    fontSize: "4rem",
  })}
  font-weight: bolder;
  text-align: center;
`;

const HeaderSpan = styled.span`
  color: goldenrod;
`;

const BlogWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  ${mobile(1921, {
    gridTemplateColumns: "repeat(auto-fit, minmax(50vw, 1fr))",
  })}
  ${mobile(768, {
    gridTemplateColumns: "repeat(auto-fit, minmax(25rem, 1fr))",
  })}
   ${mobile(576, {
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
  })}
  color: white;
  background-color: black;
`;

export interface BlogType {
  _id: string;
  title: string;
  contents: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Blogs = () => {
  // const [totalPosts, setTotalPosts] = useState<Array<number>>([
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30,
  // ]);
  const [totalPosts, setTotalPosts] = useState<Array<BlogType>>([]);
  const [currentPosts, setCurrentPosts] = useState<Array<BlogType>>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const navbar = useSelector((state: RootState) => state.navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalPage(Math.ceil(totalPosts.length / 4));
  }, []);

  useEffect(() => {
    // console.log(currentPage, totalPage);
    const getBlog = async () => {
      try {
        const res = await axiosPublicReq("/blog");
        setTotalPosts(res.data);
        setCurrentPosts([
          res.data[currentPage * 4 - 4],
          res.data[currentPage * 4 - 3],
          res.data[currentPage * 4 - 2],
          res.data[currentPage * 4 - 1],
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    getBlog();
  }, [currentPage, navbar]);

  useEffect(() => {
    dispatch(setNavbar("blogs"));
    return () => {
      dispatch(setNavbar("#"));
    };
  }, []);

  return (
    <BlogContainer>
      <Header>
        Our <HeaderSpan>Blogs</HeaderSpan>
      </Header>
      <BlogWrapper>
        <BlogsPart currentPosts={currentPosts} />
      </BlogWrapper>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          color="primary"
          className="pagination"
          onChange={(e: React.ChangeEvent<unknown>, page: number) =>
            setCurrentPage(page)
          }
        />
      </Stack>
    </BlogContainer>
  );
};

export default Blogs;
