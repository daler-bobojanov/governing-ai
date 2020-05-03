import React, { Component } from "react";
import fakenews from "../assets/fakenews.jpg";
import './styles/Jiaxi.css';

class Politic extends Component {
  state = {};
  render() {
    return (
      <div className="card-politics">
        <div className="container-jiaxi">
          <div>
            <h1> Political Participation </h1>
            <p>
              A report from the Brookings Institution states that “advancements
              in artificial intelli- gence and cyber capabilities will open
              opportunities for malicious actors to undermine democracies more
              covertly and effectively than what we have seen so far.”31 Russian
              disinformation campaigns through automated bots on social media
              have been high- lighted by researchers as attempts to interfere
              with the 2016 American presidential election.32 Because AI is
              being designed to mimic human behavior in online conver- sations,
              detecting those online bots that are weaponized to spread
              disinformation in political discourse could become more difficult.
              Bots have many useful purposes, in- cluding helping search engines
              find content. Yet those designed for malicious purpos- es, such as
              spreading disinformation, have been identified on platforms like
              Twitter,33 which undercuts the possibility of an informed
              citizenry as needed for meaningful democratic elections.
            </p>
            <p>
              Mark Zuckerberg’s written submission to the US Congress in 2018
              stated how bad- faith actors, in this instance operatives of the
              Russian government, have been able to manipulate the political
              process through Facebook.34 Further studies have demon- strated
              that bots have and continue to be used to manipulate the media in
              countries across the world to interfere with the outcomes of
              democratic elections.
            </p>
            <p>
              The rights around political participation are referenced, for
              example, in the right to self-determination and the right to equal
              participation in political and public affairs in the ICCPR. Viewed
              through this human rights lens, the co-opted use of an automated
              system by a bad-faith actor creates a human rights liability that
              demands redress. Yet finding the right remedy is one of the most
              contentious areas in platform technology today. Platforms are more
              likely to remove bots because they violate their terms of service
              rather than to protect users’ right to political participation.
              Further exploration would be needed to see how human rights
              principles could inform contractual dis- putes or litigation in
              this context.
            </p>
          </div>
          <div className="fakenews-picture">
            <img src={fakenews} alt="" width="300px"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Politic;
