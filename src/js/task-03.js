const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");
const liMarkup = images
  .map(({ url, alt }) => {
    const liRef = document.createElement("li");
    gallery.append(liRef);
    const imgRef = document.createElement("img");
    imgRef.src = url;
    imgRef.alt = alt;
    imgRef.classList.add("img");
    liRef.append(imgRef);
  })
  .join("");
gallery.insertAdjacentHTML("afterbegin", liMarkup);
gallery.style.display = "inline-flex";
gallery.style.width = "90%";
gallery.style.gap = "20px";
