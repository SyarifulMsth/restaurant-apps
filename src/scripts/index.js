import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

const main = () => {
    const base_url = "./DATA.json";

    let articleContainer = document.querySelector('.article-container');

    const renderResult = (results) => {
        const resultsData = results.restaurants;
        console.log(resultsData);

        if (resultsData) {
            resultsData.forEach((restourant) => {
                console.log(restourant);
                articleContainer.innerHTML += `
                <section>
                <a href="" onclick="return false;" class="destination-card first">
                  <figure class="card-banner">
                    <img src="${restourant.pictureId}" alt="Indonesia, Bali">
                  </figure>
    
                  <div class="card-content">
                    <h3>${restourant.name}</h3>
                    <p>${restourant.description}</p>
                  </div>
                </a>
              </section>
                `;
            });
        }
    };
    
    const fallbackResult = (message) => {
        console.log(message);
    };

    const restoory = () => {
        fetch(base_url)
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Error : " + response.status);
                    return Promise.reject(new Error(response.statusText));
                } else {
                    return Promise.resolve(response);
                }
            })
            .then((responseJson) => {
                return responseJson.json();
            })
            .then(renderResult)
            .catch(fallbackResult);
    }

    restoory();
}

main();