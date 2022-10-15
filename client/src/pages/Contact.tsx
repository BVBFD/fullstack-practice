import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { mobile } from '../utils/responsive';

const ContactSec = styled.section`
  width: 100%;
  height: 90vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-transform: capitalize;
  color: whitesmoke;
  font-size: 5rem;
  font-weight: bolder;
  text-align: center;
  height: 10%;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile(576, {
    fontSize: '3rem',
    paddingBottom: '0',
    flexDirection: 'column',
    marginTop: '2rem',
  })}
`;

const HeaderSpan = styled.span`
  color: goldenrod;
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
    flexDirection: 'column',
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
  background: url('images/blog-3.jpeg');
  position: relative;
  color: goldenrod;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
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
      width: '40%',
    })}
    ${mobile(1024, {
      width: '55%',
    })}
    ${mobile(768, {
      width: '70%',
    })}
    ${mobile(576, {
      width: '80%',
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

const Contact = () => {
  const [number, setNumber] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const handleSend = () => {
    window.location.href = `mailto:lsevina126@gmail.com?body=[이름]:${name}%0D%0A[전화번호]:${number}%0D%0A[내용]:요청 내용을 적어서주시면 정성스럽게 답변드리겠습니다 ^^`;
  };

  useEffect(() => {
    console.log(name);
    console.log(number);
  }, [name, number]);

  return (
    <ContactSec>
      <Header>
        About <HeaderSpan>Contact</HeaderSpan>
      </Header>
      <Article>
        <Aside>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.265077453993!2d129.1826103434988!3d35.842503185968845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35664fa7c1ac6be9%3A0xc8e6a269a62970b5!2z7Luk7ZS87ZSM66CI7J207IqkIOy2qe2aqOygkA!5e0!3m2!1sko!2skr!4v1665838927228!5m2!1sko!2skr'
            width='100%'
            height='100%'
          ></iframe>
        </Aside>
        <Mail>
          <div>Phone Number</div>
          <input
            onChange={(e) => setNumber(parseInt(e.target.value))}
            type='number'
            placeholder='Enter Your Phone Number...'
          />
          <div>Name</div>
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            placeholder='Enter Your Name...'
          />
          <button onClick={handleSend}>Send</button>
        </Mail>
      </Article>
    </ContactSec>
  );
};

export default Contact;
