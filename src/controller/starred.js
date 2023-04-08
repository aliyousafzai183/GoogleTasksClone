import data from "../model/data";

const getStarredData = () => {
  const starredData =  data.filter(item => item.starred === true);
  console.log(starredData);
  console.log("No?");
  return starredData;
}

export default getStarredData;
