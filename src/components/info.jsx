import React from "react";
import { Page, Navbar, Block, BlockTitle, Icon } from "framework7-react";

const Info = () => (
  <Block className="block">
    <Block className="avatar-wrapper">
      <img className="avatar" src="../assets/images/avatar.jpeg" />
      <div className="divider"></div>
    </Block>
    <div className="hello">HELLO! I'm LIQIONGYU</div>
    <div className="summary">
      <div className="summary-item">
        <Icon icon="react" size={40} color="#005bc1" />
        <p className="sub-title">Fueled by Innovation</p>
        <p className="summary-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          molestiae laudantium dignissimos est nobis delectus nemo ea alias
          voluptatum architecto, amet similique, saepe iste consectetur in
          repellat ut minus quibusdam!
        </p>
      </div>
      <div className="summary-item">
        <Icon icon="telescope" size={40} />
        <p className="sub-title">Inspired by Purpose</p>
        <p className="summary-text">
          Molestias et distinctio porro nesciunt ratione similique, magni
          doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a
          recusandae, fugiat in ea voluptates fuga eius, velit corrupti
          reprehenderit dignissimos consequatur!
        </p>
      </div>
      <div className="summary-item">
        <Icon icon="idea" size={40} />
        <p className="sub-title">Driven by Creativity</p>
        <p className="summary-text">
          Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos
          doloremque ipsa ullam eligendi commodi deserunt doloribus inventore
          magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea
          molestiae ullam delectus!
        </p>
      </div>
    </div>
    <BlockTitle>About Me</BlockTitle>
    <Block>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
        molestiae laudantium dignissimos est nobis delectus nemo ea alias
        voluptatum architecto, amet similique, saepe iste consectetur in
        repellat ut minus quibusdam!
      </p>
      <p>
        Molestias et distinctio porro nesciunt ratione similique, magni
        doloribus, rerum nobis, aliquam quae reiciendis quasi modi. Nam a
        recusandae, fugiat in ea voluptates fuga eius, velit corrupti
        reprehenderit dignissimos consequatur!
      </p>
    </Block>
    <BlockTitle>What I do</BlockTitle>
    <Block>
      <p>
        Blanditiis, cumque quo adipisci. Molestiae, dolores dolorum quos
        doloremque ipsa ullam eligendi commodi deserunt doloribus inventore
        magni? Ea mollitia veniam nostrum nihil, iusto doloribus a at! Ea
        molestiae ullam delectus!
      </p>
    </Block>
    <BlockTitle>Skillset</BlockTitle>
    <Block className="skill">
      <div className="skill-item">
        <Icon icon="programming" size={40} />
        <p>Programming</p>
      </div>
      <div className="skill-item">
        <Icon icon="song" size={40} />
        <p>Programming</p>
      </div>
      <div className="skill-item">
        <Icon icon="programming" size={40} />
        <p>Programming</p>
      </div>
      <div className="skill-item">
        <Icon icon="programming" size={40} />
        <p>Programming</p>
      </div>
      <div className="skill-item">
        <Icon icon="programming" size={40} />
        <p>Programming</p>
      </div>
      <div className="skill-item">
        <Icon icon="programming" size={40} />
        <p>Programming</p>
      </div>
    </Block>
  </Block>
);

export default Info;
