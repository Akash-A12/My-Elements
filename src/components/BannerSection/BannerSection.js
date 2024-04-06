import React from "react";
import Link from "next/link";

export default function BannerSection({ Class, data }) {
  return (
    <section
      className={`banner-section ${Class}`}
      style={{
        background: data?.bgImage ? `url(${data?.bgImage})` : "#d3d3d3",
      }}
    >
      <div className="container">
        <div className="content-wrapper">
          <h6 className="banner-pre-title">Pre Title</h6>
          <h1 className="banner-title">Banner Title</h1>
          <div className="banner-description">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="banner-button-wrapper">
            <Link href="#" aria-label="Button" className="button btn1">
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
