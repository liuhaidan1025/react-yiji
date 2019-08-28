export const isGood = (show, id) => {
  return show.find(item => item.id === id).isGood.find(item => item === "myid");
};
