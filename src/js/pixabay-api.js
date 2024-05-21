import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function getImages(query) {
    const BASE_URL = "https://pixabay.com/api/";
    const PARAMS = new URLSearchParams({
        key: "43999869-2222e4e6c4d0611e5b13cb64c",
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
    });
    const url = `${BASE_URL}?${PARAMS}`;
    const loader = document.querySelector(".loader");

    loader.style.display = "block";

    return fetch(url)
        .then(res => {
            if (!res.ok) {
                iziToast.error({
                    title: `Error: ${res.status}`,
                    message: "Something happened :(",
                    position: "topRight"
                });
            }

            loader.style.display = "none";

            return res.json();
        })
        .then(data => {
            if (!data.hits.length) {
                iziToast.error({
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
            }

            return data.hits;
        })
}