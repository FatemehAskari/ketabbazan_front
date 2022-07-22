// import footerBg from '../../assets/Image/footer-bg.png';
// import instagram from '../../assets/social/instagram.png';
// import email from '../../assets/social/email.png';
// import whatsapp from '../../assets/social/whatsapp.png';
// import twitter from '../../assets/social/twitter.png';
// import phone from '../../assets/social/call.png';
import footer from "../../assets/Image/footer1.jpg";
import instagram from "../../assets/social/instagram.png";
import facebook from "../../assets/social/facebook.png";
import whatsapp from "../../assets/social/whatsapp.png";
import twitter from "../../assets/social/twitter.png";
import messenger from "../../assets/social/messenger.png";
import youtube from "../../assets/social/youtube.png";
import linkin from "../../assets/social/linkin.png";
import "./style.css";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "120px",
        justifyContent: "center",
        direction: "rtl",
        textAlign: "center",
      }}
    >
      <img
        style={{
          position: "absolute",
          width: "100%",
          height: "35%",
          objectFit: "cover",
          zIndex: -1,
        }}
        src={footer}
        alt="footer background nature"
      />
      <div className="footer_ti">در شبکه های زیر ما را دنبال کنید</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="footer_social"
      >
        <a href="https://www.instagram.com/ketabbazan_ml/" target="_blank">
          <img
            alt="instagram"
            src={instagram}
            style={{marginRight:"0px"}}
            className="footer_ajza"
          />
        </a>

        <a href="https://www.facebook.com/profile.php?id=100082999008181" target="_blank">
          <img
            alt="facebook"
            src={facebook}
            style={{}}
            className="footer_ajza"
          />
        </a>

        <a href="https://www.whatsapp.com/" target="_blank">
          <img
            alt="whatsapp"
            src={whatsapp}
            style={{}}
            className="footer_ajza"
          />
        </a>
        <a href="https://twitter.com/ketabbazan" target="_blank">
          <img alt="twitter" src={twitter} style={{}} className="footer_ajza" />
        </a>

        <a href="https://www.linkedin.com/" target="_blank">
          <img alt="linkin" src={linkin} style={{}} className="footer_ajza" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
