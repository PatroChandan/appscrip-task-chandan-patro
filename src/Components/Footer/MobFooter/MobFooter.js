import React from "react";
import "./MobFooter.css";
import USA from "../../../images/United States of America (US).svg";
import star from "../../../images/Star 1.svg";
import linkedIn from "../../../images/a.svg";
import insta from "../../../images/Insta.svg";
import AMX from "../../../images/AMX.svg";
import applePay from "../../../images/ApplePay.svg";
import G_Pay from "../../../images/G_Pay.svg";
import masterCard from "../../../images/masterCard.svg";
import OPay from "../../../images/OPay.svg";
import payPal from "../../../images/payPal.svg";

const MobFooter = () => {
  return (
    <div className="mobFooter">
      <div className="up">
        <div className="up_left">
          <ul>
            <li>
              <h3>BE THE FIRST TO KNOW</h3>
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. this is simply dummy text.
            </li>
            <li>
              <input type="text" placeholder="Enter your e-mail" />{" "}
              <input type="button" value="SUBSCRIBE" />
            </li>
          </ul>
        </div>
        <div className="up_right">
          <ul>
            <li>
              <h3>CONTACT US</h3>
            </li>
            <li>+44 221 133 5360</li>
            <li>customercare@mettamuse.com</li>
            <li>
              <h3>CURRENCY</h3>
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={USA} alt="" />
              <img src={star} alt="" />
              USD
            </li>
            <li style={{ fontSize: "100" }}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </li>
          </ul>
        </div>
      </div>
      <div className="down">
        <div className="down_left">
          <ul>
            <li>
              <h3>mettā muse</h3>
            </li>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>
        <div className="down_mid">
          <ul>
            <li>
              <h3>QUICK LINKS</h3>
            </li>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="down_right">
          <div className="down_right_up">
            <ul>
              <li>
                <h3>FOLLOW US</h3>
              </li>
              <li>
                <img src={linkedIn} alt="" />
                <img src={insta} alt="" />
              </li>
            </ul>
          </div>
          <div className="down_right_dwn">
            <ul>
              <li>
                <h3>mettā muse Accepts</h3>
              </li>
              <li>
                <img src={G_Pay} alt="" />
                <img src={masterCard} alt="" />
                <img src={payPal} alt="" />
                <img src={AMX} alt="" />
                <img src={applePay} alt="" />
                <img src={OPay} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="last">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </div>
  );
};

export default MobFooter;
