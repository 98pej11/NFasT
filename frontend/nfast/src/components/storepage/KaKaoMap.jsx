import React, { useEffect } from "react";

function KaKaoMap() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);

    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    // To remove the marker from the map, uncomment the line below
    // marker.setMap(null);
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "350px" }}>
      {" "}
    </div>
  );
}

export default KaKaoMap;
