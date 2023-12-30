import axios from "axios";

export default function useClickedData(checkbox, setClickedData, index) {
  async function fetchData() {
    if (checkbox.length <= 0) {
      return false;
    }
    const clickedData = await getClickedData(
      checkbox[checkbox.length - 1],
      index,
    );

    setClickedData(clickedData);
  }

  return fetchData;
}

async function getClickedData(checkboxIndex, index) {
  try {
    const result = await axios.get(
      `http://13.209.46.215:8080/api/travels/${checkboxIndex}/${index}`,
    );
    return result.data.data;
  } catch (e) {
    console.log(e);
  }
}
