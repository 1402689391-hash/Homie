import { useState } from "react";
import "./Contact.css";

const FEATURE_PILLS = ["品牌出海全链路策划", "海外社媒矩阵搭建", "全链路增长策略"];

export default function Contact() {
  return (
    <section id="contact" className="contact-hero">
      <video
        className="contact-video-bg"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260618_174853_aac61aa2-0f3f-4cf1-bc78-7f657dd11164.mp4"
        autoPlay loop muted playsInline
      />
      <div className="contact-overlay">
        <div className="contact-main">
          <div className="contact-main-inner">
            <div className="contact-left">
              <h1 className="contact-heading">做有故事、能变现的</h1>
              <h1 className="contact-heading contact-heading-highlight">全球化品牌造浪者</h1>
              <p className="contact-subtitle-text">
                无论是跨境品牌从0到1搭建、海外社媒增长，还是全链路运营策略，
                期待和你一起把品牌故事讲给世界听。
              </p>
            </div>
            <div className="contact-right-desktop">
              {FEATURE_PILLS.map((pill, i) => (
                <span key={i} className="contact-feature-pill">{pill}</span>
              ))}
            </div>
          </div>
          <div className="contact-feature-pills-mobile">
            {FEATURE_PILLS.map((pill, i) => (
              <span key={i} className="contact-feature-pill">{pill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
