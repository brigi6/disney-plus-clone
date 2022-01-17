import React from "react";
import "./Detail.css";
import db from "../firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetailData(doc.data());
        } else {
          console.log("no such document in firebase 🔥");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [id]);

  return (
    <div className="detail">
      <div className="background">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </div>
      <div className="image__title">
        <img src={detailData.titleImg} alt={detailData.title} />
      </div>
      <div className="detail__controls">
        <button className="details__playbutton">
          <img
            src="/images/play-icon-black.png"
            alt=""
            style={{ width: "35px", objectFit: "contain" }}
          />
          <span>PLAY</span>
        </button>
        <button className="details__trailerbutton">
          <img
            src="/images/play-icon-white.png"
            alt=""
            style={{ width: "35px", objectFit: "contain" }}
          />
          <span>Trailer</span>
        </button>
        <button className="details__addbutton">
          <span>+</span>
        </button>
        <button className="details__groupwatchbutton">
          <img src="/images/group-icon.png" alt="" />
        </button>
      </div>

      <div className="details__subtitle">{detailData.subTitle}</div>
      <div className="details__description">{detailData.description}</div>
    </div>
  );
};

export default Detail;
