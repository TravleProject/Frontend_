/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

// libraries
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";

// state
import { storeDatas } from "../state";

// component
import InputComponent from "../components/InputComponent";
import ModalComponent from "../components/ModalComponent";

// img
import Location from "../assets/location.png";
import DMarkers from "../assets/3DMarker.png";

// custom hooks
import useLoadCheckbox from "../hooks/useLoadCheckbox";
import { useHandleCheckbox } from "../hooks/useHandleCheckbox";
import useClickedData from "../hooks/useClickedData";

const MapPage = () => {
  const [currentLocation, setCurrentLocation] = useRecoilState(storeDatas);

  const [storeData, setStoreData] = useState([]);
  const [clickedData, setClickedData] = useState([]);
  const [review, setReview] = useState();
  const [checkbox, setCheckbox] = useState([]);
  const [isvisible, setIsvisible] = useState(false);
  const [myLocation, setMyLocation] = useState({
    latitude: 0,
    longuitude: 0,
  });
  const [cntState, setcntState] = useState({
    cntLocationX: 0,
    cntLocationY: 0,
  });
  const [zoomSize, setZoomSize] = useState();

  const { latitude, longuitude } = myLocation;
  const { cntLocationX, cntLocationY } = cntState;

  const handleCheckbox = (e) => {
    const handlesCheckbox = useHandleCheckbox(e, setCheckbox, checkbox);
  };

  const loadCheckBox = useLoadCheckbox(checkbox, setStoreData);

  useEffect(() => {
    navigator.geolocation.watchPosition((position) => {
      setMyLocation((location) => ({
        ...location,
        latitude: position.coords.latitude,
        longuitude: position.coords.longitude,
      }));
    });
  }, [latitude, longuitude]);

  useEffect(() => {
    loadCheckBox();
  }, [checkbox]);

  // 지도 생성
  useEffect(() => {
    // 현재 zoomsize가 기존 size와 다르고 latitude와 longuitude가 다르면 현재 줌 사이즈와 현재 중심 좌표를 사용함
    const map = document.getElementById("map");
    const mapOptions = {
      center: new naver.maps.LatLng(latitude, longuitude),
      zoom: zoomSize > 0 ? zoomSize : 15,
      // 줌 컨트롤 표시 여부
      zoomControl: true,
      // 줌 컨트롤의 옵션
      zoomControlOptions: {
        // 줌 컨트롤의 위치를 우측 상단으로 배치함
        position: naver.maps.Position.TOP_RIGHT,
      },
      // 지도 데이터 저작권 컨트롤 표시 여부
    };
    const kmap = new window.naver.maps.Map(map, mapOptions);
    const currentUserPosition = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longuitude),
      map: kmap,
      icon: {
        content:
          `<img src=${Location} alt="" ` +
          'style="margin: 0px; padding: 0px; border: 0px solid transparent;' +
          'width: 20px; height: 30px;">',
      },
    });

    storeData.map((item, i) => {
      const markerd = new naver.maps.Marker({
        index: i,
        position: new naver.maps.LatLng(item.latitude, item.longitude),
        map: kmap,
        icon: {
          content:
            `<img src=${DMarkers} alt="" ` +
            'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; ' +
            '-webkit-user-select: none; position: absolute; width: 30px; height: 30px; left: 0px; top: 5px;">',
        },
      });

      const infoWindow = new naver.maps.InfoWindow({
        content: `<div style="color: black; padding: 1rem;">
                  <div>${item.title}</div>
                  <div style="color: black;">${item.address}</div>
                  </div>`,
      });

      markerd.addListener("click", async () => {
        setIsvisible((prevIsvisible) => !prevIsvisible);
        const fetchData = useClickedData(checkbox, setClickedData, item.title);
        fetchData();
      });

      markerd.addListener("mouseover", () => {
        infoWindow.open(kmap, markerd);
      });

      markerd.addListener("mouseout", () => {
        infoWindow.close();
      });

      return null;
    });

    naver.maps.Event.addListener(kmap, "idle", () => {
      const center = kmap.getCenterPoint(); // 이동 후 중심 좌표 가져오기
      const cntZoom = kmap.getZoom();
      setZoomSize(cntZoom);
      setcntState((prev) => ({
        ...prev,
        cntLocationX: center.x,
        cntLocationY: center.y,
      }));
    });
  }, [storeData, latitude, longuitude]);

  useEffect(() => {
    console.log("storeData: ", storeData);
    console.log("clickedData: ", clickedData);
  }, [storeData, clickedData]);

  return (
    <Container>
      <div
        id="map"
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255,0.6)",
        }}
      />
      <div className="drawerPosition">
        <InputComponent checkbox={checkbox} handleCheckbox={handleCheckbox} />
      </div>
      {isvisible && Object.keys(clickedData).length > 0 ? (
        <ModalComponent
          selectedData={clickedData[0]}
          isvisible={isvisible}
          setIsvisible={setIsvisible}
          review={review}
        />
      ) : null}
    </Container>
  );
};

export default MapPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .drawerPosition {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
