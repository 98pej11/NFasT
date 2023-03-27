import React, { useEffect } from "react";

function KaKaoMap() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    function locationLoadSuccess(pos) {
      const currentPos = new window.kakao.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      );

      // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
      map.panTo(currentPos);

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: currentPos,
      });

      // 기존에 마커가 있다면 제거
      marker.setMap(null);
      marker.setMap(map);
    }
    function locationLoadError() {
      alert("위치 정보를 가져오는데 실패했습니다.");
    }
    navigator.geolocation.getCurrentPosition(
      locationLoadSuccess,
      locationLoadError
    );
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "350px" }}>
      {" "}
    </div>
  );
}

export default KaKaoMap;
