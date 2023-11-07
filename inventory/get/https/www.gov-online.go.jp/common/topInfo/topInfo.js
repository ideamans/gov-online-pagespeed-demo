((id) => {
  console.log(`${id} にコンテンツを挿入`);
  document.getElementById(id).innerHtml = "";
})("topInfo");
