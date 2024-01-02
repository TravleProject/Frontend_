import axios from "axios";

export default function useClickedData(checkbox, setClickedData, title) {
  async function fetchData() {
    if (checkbox.length <= 0) {
      return false;
    }
    const clickedData = await getClickedData(
      checkbox[checkbox.length - 1],
      title,
    );

    setClickedData(clickedData);
  }

  return fetchData;
}

async function getClickedData(checkboxIndex, title) {
  try {
    const result = await axios.get(
      `http://13.209.46.215:8080/api/travels/info/search/${checkboxIndex}/${title}`,
    );
    return result.data.data;
  } catch (e) {
    console.log(e);
  }
}
