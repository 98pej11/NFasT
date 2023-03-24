import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Marker from "../../assets/marker.png";

function KaKaoMap() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.54699, 127.09598),
      level: 4,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const imageSrc = Marker;
    const imageSize = new window.kakao.maps.Size(64, 69);
    const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
    const markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );
    const markerPosition = new window.kakao.maps.LatLng(37.54699, 127.09598);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    marker.setMap(map);

    const content = (
      <div className="customoverlay">
        <a
          href="https://map.kakao.com/link/map/11394059"
          rel="noreferrer"
          target="_blank"
        >
          <span className="title">구의야구공원</span>
        </a>
      </div>
    );

    const position = new window.kakao.maps.LatLng(37.54699, 127.09598);

    const node = document.createElement("div");
    ReactDOM.render(content, node);

    // eslint-disable-next-line no-unused-vars
    const customOverlay = new window.kakao.maps.CustomOverlay({
      map,
      position,
      content: node,
      yAnchor: 1,
    });
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "350px" }}>
      {" "}
    </div>
  );
}

export default KaKaoMap;
