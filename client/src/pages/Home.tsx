import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { axiosPublicReq } from "../axiosReqMethods";
import Menuboxs from "../components/Menuboxs";
import Productboxs from "../components/Productboxs";
import Reviews from "../components/Reviews";
import { mobile } from "../utils/responsive";

import { Pagination, Stack } from "@mui/material";
import BlogsPart from "../components/BlogsPart";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

const HomeSec = styled.section`
  width: 100%;
`;

const Wrapper = styled.div`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(lightcoral, #000000);
    mix-blend-mode: overlay;
  }
`;

const Img = styled.img``;

const TextBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 40%;
  left: 5%;
  background: transparent;
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 999;
  ${mobile(1280, {
    textAlign: "center",
    left: "0",
  })}
  ${mobile(960, {
    top: "35%",
    left: "0",
  })}
  ${mobile(768, {
    top: "25%",
    left: "0",
  })}
`;

const TextSpan = styled.span`
  text-transform: uppercase;
  font-size: 7rem;
  font-weight: bolder;
`;

const TextP = styled.p`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: medium;
  letter-spacing: 0.3rem;
  margin: 0.4rem 0;
  position: relative;
  top: 1rem;
`;

const Sec = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
`;

const ExplainBox = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  background-color: #13131a;
  padding: 4rem;
  gap: 2rem;
  margin: 3rem 6rem;

  ${mobile(1024, {
    flexDirection: "column",
  })}
`;

const ImgBox = styled.div`
  width: 50%;
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  ${mobile(1024, {
    width: "100%",
  })}
`;

const CommBox = styled.div`
  width: 50%;
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mobile(1024, {
    width: "100%",
  })}

  span,
  button {
    display: inline-block;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 1.8rem;
    font-weight: bolder;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.4rem;
    display: inline-block;
    margin-bottom: 0.4rem;
  }

  button {
    width: fit-content;
    padding: 0.8rem 1.2rem;
    margin-top: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: goldenrod;
    color: white;
    border-radius: 0.4rem;
    position: relative;
  }

  button:hover {
    color: goldenrod;
    background-color: white;
  }

  button:active {
    transform: scale(0.8);
  }
`;

const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  width: 80%;
  gap: 2rem;
  margin-top: 2rem;
  ${mobile(1024, {
    width: "80%",
  })}

  &.productBoxs {
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    ${mobile(1280, {
      gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    })}
    ${mobile(960, {
      gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
    })}
  }
`;

const Row = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 30vh;
  overflow-x: hidden;
  animation: hueRotate 1s linear infinite;

  i {
    transform: scale(8);
    margin-right: 10rem;
    cursor: pointer;
    text-shadow: 1px 1px 1px gray;
    opacity: 0.8;
  }

  i:hover {
    transition: 0.2s;
    opacity: 1;
    color: #0f0;
  }

  .firstRow {
    display: flex;
    animation: move1 40s linear infinite;
    animation-delay: -40s;
  }

  .secondRow {
    display: flex;
    animation: move2 40s linear infinite;
    animation-delay: -20s;
  }

  @keyframes move1 {
    0% {
      transform: translateX(150%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes move2 {
    0% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(-150%);
    }
  }

  @keyframes hueRotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

const BlogContainer = styled.div`
  width: 100%;

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
  padding-bottom: 1rem;
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

const Article = styled.article`
  background-color: white;
  width: 80%;
  height: 70vh;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  ${mobile(1280, {
    flexDirection: "column",
  })}
`;

const Aside = styled.aside`
  flex: 1;
`;

const Mail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("images/blog-3.jpeg");
  position: relative;
  color: goldenrod;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(1, 1, 1, 0.8);
  }

  div {
    position: relative;
    z-index: 999;
    font-weight: bolder;
    font-size: 1.6rem;
    margin-top: 2rem;
  }

  input {
    position: relative;
    z-index: 999;
    margin-top: 1rem;
    font-size: 1.2rem;
    height: 2.4rem;
    width: 35%;
    ${mobile(1280, {
      width: "40%",
    })}
    ${mobile(1024, {
      width: "55%",
    })}
    ${mobile(768, {
      width: "70%",
    })}
    ${mobile(576, {
      width: "80%",
    })}
  }

  button {
    z-index: 999;
    width: fit-content;
    padding: 0.6rem 1.2rem;
    margin-top: 2rem;
    font-size: 1rem;
    cursor: pointer;
    background-color: goldenrod;
    color: white;
    border-radius: 0.4rem;
    position: relative;
    z-index: 999;

    &:hover {
      color: goldenrod;
      background-color: white;
    }

    &:active {
      transform: scale(0.8);
    }
  }
`;

interface BlogsPropsType {
  totalPosts?: Array<BlogType>;
}

export interface MenuType {
  _id: string;
  title: string;
  price: number;
  image: string;
  discount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ProductType {
  _id: string;
  title: string;
  image: string;
  flavor: 0 | 1 | 2 | 3 | 4 | 5;
  acidity: 0 | 1 | 2 | 3 | 4 | 5;
  body: 0 | 1 | 2 | 3 | 4 | 5;
  sweetness: 0 | 1 | 2 | 3 | 4 | 5;
  aftertaste: 0 | 1 | 2 | 3 | 4 | 5;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ReviewType {
  _id: string;
  name: string;
  content: string;
  img: string;
  stars: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogType {
  _id: string;
  title: string;
  contents: string;
  img: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Home = () => {
  const [menu, setMenu] = useState<Array<MenuType>>();
  const [product, setProduct] = useState<Array<ProductType>>();
  const [review, setReview] = useState<Array<ReviewType>>();

  const [totalPosts, setTotalPosts] = useState<Array<BlogType>>([]);
  const [currentPosts, setCurrentPosts] = useState<Array<BlogType>>([]);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [number, setNumber] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const homeRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const aboutRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const menuRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const reviewRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const blogsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const productsRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contactRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleSend = () => {
    window.location.href = `mailto:lsevina126@gmail.com?body=[이름]:${name}%0D%0A[전화번호]:${number}%0D%0A[내용]:요청 내용을 적어서주시면 정성스럽게 답변드리겠습니다 ^^`;
  };

  useEffect(() => {
    const getMenu = async () => {
      try {
        const res = await axiosPublicReq.get("/menu");
        setMenu(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getProduct = async () => {
      try {
        const res = await axiosPublicReq.get("/product");
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getReview = async () => {
      try {
        const res = await axiosPublicReq.get("/review");
        setReview(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getBlog = async () => {
      try {
        const res = await axiosPublicReq("/blog");
        setTotalPosts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMenu();
    getProduct();
    getReview();
    getBlog();
  }, []);

  useEffect(() => {
    const getBlog = async () => {
      try {
        const res = await axiosPublicReq("/blog");
        setTotalPosts(res.data);
        setTotalPage(Math.ceil(res.data.length / 4));
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
  }, [currentPage]);

  return (
    <>
      <Navbar />
      <HomeSec id="home" ref={homeRef}>
        <Wrapper>
          <Img src="../images/home-img.jpeg" />
          <TextBox>
            <TextSpan>Best Coffee</TextSpan>
            <TextSpan>Served For You</TextSpan>
            <TextP>We are not selling only coffee</TextP>
            <TextP>But we are also serving comforts for you</TextP>
          </TextBox>
        </Wrapper>
      </HomeSec>
      <Sec id="about" ref={aboutRef}>
        <Header>
          About <HeaderSpan>Us</HeaderSpan>
        </Header>
        <ExplainBox>
          <ImgBox>
            <Img src="../images/about-img.jpeg" />
          </ImgBox>
          <CommBox>
            <span>What is the special things in our coffee</span>
            <p>We use the best coffee beans produced in various countries.</p>
            <p>
              The best beans scattered from Vietnam, Ethiopia, Vietam and
              Guatemala.
            </p>
            <p>
              We always use the best beans which is produced in Coffee Belt.
            </p>
            <p>And, We have very antic furnitures and interior design.</p>
            <p>
              You can feel comfortable with the best coffee at the coffee house.
            </p>
            <button>Learn More</button>
          </CommBox>
        </ExplainBox>
      </Sec>
      <Sec id="menu" ref={menuRef}>
        <Header>
          Our <HeaderSpan>Menu</HeaderSpan>
        </Header>
        <GridBox>
          <Menuboxs menu={menu} />
        </GridBox>
      </Sec>
      <Sec id="products" ref={productsRef}>
        <Header>
          Our <HeaderSpan>Products</HeaderSpan>
        </Header>
        <GridBox className="productBoxs">
          <Productboxs product={product} />
        </GridBox>
      </Sec>
      <Sec id="review" ref={reviewRef} style={{ paddingBottom: "8rem" }}>
        <Header>
          Our <HeaderSpan>Review</HeaderSpan>
        </Header>
        <Reviews review={review} />
      </Sec>

      <Sec id="contact" ref={contactRef}>
        <Header>
          About <HeaderSpan>Contact</HeaderSpan>
        </Header>
        <Article>
          <Aside>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.265077453993!2d129.1826103434988!3d35.842503185968845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664fa7c1ac6be9%3A0xc8e6a269a62970b5!2z7Luk7ZS87ZSM66CI7J207IqkIOy2qe2aqOygkA!5e0!3m2!1sko!2skr!4v1665838927228!5m2!1sko!2skr"
              width="100%"
              height="100%"
            ></iframe>
          </Aside>
          <Mail>
            <div>Phone Number</div>
            <input
              onChange={(e) => setNumber(parseInt(e.target.value))}
              type="number"
              placeholder="Enter Your Phone Number..."
            />
            <div>Name</div>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name..."
            />
            <button onClick={handleSend}>Send</button>
          </Mail>
        </Article>
      </Sec>

      <Sec id="blogs" ref={blogsRef}>
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
              onChange={(e: React.ChangeEvent<unknown>, page: number) => {
                console.log(page);
                setCurrentPage(page);
              }}
            />
          </Stack>
        </BlogContainer>
      </Sec>

      <Sec id="logo">
        <Header>
          We are <HeaderSpan>Supported By</HeaderSpan>
        </Header>
        <Row className="row">
          <div className="firstRow">
            <i className="fab fa-amazon"></i>
            <i className="fab fa-angular"></i>
            <i className="fas fa-archway"></i>
            <i className="fab fa-apple"></i>
            <i className="fas fa-audio-description"></i>
            <i className="fas fa-atlas"></i>
            <i className="fab fa-bluetooth"></i>
            <i className="fas fa-briefcase"></i>
            <i className="fab fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-discover"></i>
            <i className="fab fa-cc-jcb"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-stripe"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-phoenix-framework"></i>
            <i className="fab fa-studiovinari"></i>
            <i className="fab fa-suse"></i>
            <i className="fab fa-wizards-of-the-coast"></i>
          </div>
          <div className="secondRow">
            <i className="fab fa-amazon"></i>
            <i className="fab fa-angular"></i>
            <i className="fas fa-archway"></i>
            <i className="fab fa-apple"></i>
            <i className="fas fa-audio-description"></i>
            <i className="fas fa-atlas"></i>
            <i className="fab fa-bluetooth"></i>
            <i className="fas fa-briefcase"></i>
            <i className="fab fa-cc-amazon-pay"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-discover"></i>
            <i className="fab fa-cc-jcb"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-cc-stripe"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-phoenix-framework"></i>
            <i className="fab fa-studiovinari"></i>
            <i className="fab fa-suse"></i>
            <i className="fab fa-wizards-of-the-coast"></i>
          </div>
        </Row>
      </Sec>
    </>
  );
};

export default Home;
