import React, { useState } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
// import Development from "./Development";
// import ProductDesign from "./ProductDesign";
// import WebDesign from "./WebDesign";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";


const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1300px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
// display: flex;
  flex: 1;
   top: 0px;
  left: 0px;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
   
    }
`;

const Image = styled.div`
width: 450px;
height: 470px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px) {
  width: 400px;
  height: 500px;
}

@keyframes animate {
  to {
    transform: translateY(20px);
  }
}
`;


const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {/* {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )} */}
          
              {/* 3d Animation for Work{Right} section  */}
              <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[5, 2, 1]} />
             <Sphere args={[1, 100, 200]} scale={2.3}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.5}
                speed={2}
                />
              </Sphere>
          </Canvas>
          <Image>
           <img src="./img/react2.png" />
           </Image>
        </Right>
      </Container>
    </Section>
  );
};

export default Works;