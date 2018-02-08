const path = require("path");
const imagedir = path.resolve(__dirname, "..", "imgs");
const images = [
  path.join(imagedir, "b1.jpg"),
  path.join(imagedir, "b2.jpeg"),
  path.join(imagedir, "b3.jpg"),
  path.join(imagedir, "b4.jpg"),
  path.join(imagedir, "Image_9.jpeg"),
  path.join(imagedir, "Image_10.jpeg"),
  path.join(imagedir, "Image_11.jpeg"),
  path.join(imagedir, "Image_12.jpeg"),
  path.join(imagedir, "Image_13.jpeg"),
  path.join(imagedir, "Image_14.jpeg"),
  path.join(imagedir, "Image_15.jpeg"),
  path.join(imagedir, "Image_16.jpeg"),
  path.join(imagedir, "Image_17.jpeg"),
  path.join(imagedir, "Image_18.jpeg"),
  path.join(imagedir, "Image_19.jpeg"),
  path.join(imagedir, "Image_20.jpeg"),
  path.join(imagedir, "Image_21.jpeg")
];

const generateurl = function() {
  let num = Math.floor(Math.random() * (images.length - 1)); //0-3的整数
  return images[num];
};

module.exports = generateurl;
