import "./about.css";
import Award from "../../img/award.png";
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long story ipsusm hfha you cant even imagine
        </p>
        <p className="a-desc">
          Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
          Lorem ipsumLorem ipsumLorem ipsum
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"> Best design of world award</h4>
            <p className="a-award-desc">
              rem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
