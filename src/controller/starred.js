import data from "../model/data";

const getStarredData = () => {
  const myData = data();
  const starredData =  myData.filter(item => item.starred === true && item.completed === false);
  return starredData;
}

export default getStarredData;
