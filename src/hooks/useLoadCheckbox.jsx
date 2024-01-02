import axios from "axios";

export default function useLoadCheckbox(checkbox, setStoreData) {
  async function loadCheckbox() {
    if (checkbox.length <= 0) {
      return false;
    }

    const mapData = await getMapData(checkbox[checkbox.length - 1]);

    setStoreData((prevData) => [...prevData, ...mapData.data.data]);
  }

  return loadCheckbox;
}

async function getMapData(checkboxIndex) {
  const result = await axios.get(
    `http://13.209.46.215:8080/api/travels/info/${checkboxIndex}`,
  );

  return result;
}
