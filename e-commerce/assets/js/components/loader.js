function loader() {
  window.addEventListener("load", function () {
    /*  LA CABEZA DEL DOM ES document */
    const loader = document.querySelector(".loader");
    loader.classList.add("loader--hidden");
  });
}

export default loader;
