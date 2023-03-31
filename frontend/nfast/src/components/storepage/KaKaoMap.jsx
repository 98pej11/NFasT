import React, { useEffect } from "react";

export default function KaKaoMap(props) {
  // eslint-disable-next-line react/prop-types
  const { storeLat, storeLng } = props;
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new window.kakao.maps.LatLng(storeLat, storeLng),
      level: 3,
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);

    function locationLoadSuccess(pos) {
      const currentPos = new window.kakao.maps.LatLng(storeLat, storeLng);

      // 지도 이동(기존 위치와 가깝다면 부드럽게 이동)
      map.panTo(currentPos);

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: currentPos,
      });

      // 기존에 마커가 있다면 제거
      marker.setMap(null);
      marker.setMap(map);

      return {
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      };
    }
    function locationLoadError() {
      // eslint-disable-next-line
      alert("위치 정보를 가져오는데 실패했습니다.");
    }
    navigator.geolocation.getCurrentPosition(
      locationLoadSuccess,
      locationLoadError
    );
  }, [storeLat, storeLng]);

  return (
    <div id="map" style={{ width: "100%", height: "350px" }}>
      {" "}
    </div>
  );
}

// 위치 정보를 가져와서 지도와 마커를 생성하는 함수
export function locationLoadSuccess(pos) {
  return {
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };
}

export function locationLoadError() {
  // eslint-disable-next-line no-alert
  alert("위치 정보를 가져오는데 실패했습니다.");
}
