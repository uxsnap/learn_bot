function htmlWrapper(text) {
  return `
    <div style="
      background-color: rgb(31, 34, 39); 
      font-size: 18px;
      padding: 5px;
      width: auto;
      max-width: 200px;
      text-align: center;
      border-radius: 2px;
    ">
      <code style="color: white">
        ${text}
      </code>
    </div>
  `
}

function rand(range) {
  return Math.floor(Math.random() * range);
}

function getRandomArrElement(arr) {
  return arr[rand(arr.length)];
}

module.exports = { htmlWrapper, getRandomArrElement, rand };