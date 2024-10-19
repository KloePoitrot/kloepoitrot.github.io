async function fetchJSONData(){
    fetch("../json/data.json")
    .then(async (data) => {
        if (data.ok) {
            data = await data.json()
            displayRepos(data.works)
        }
    }).catch((error) => {
        console.error(error);
    });
}

function displayRepos(data){
    let workSection = document.querySelector("#works")
    for(let i = 0; i < data.length ; i++){

        let categories = ''
        for (let cat = 0; cat < data[i].category.length; cat++){
            categories += `
                <p class="work-category-btn">` + data[i].category[cat] + `</p>
            `
        }

        workSection.innerHTML += `
            <article class="card card-grey" data-id="` + data[i].id + `">
                    <a href="` + data[i].link + `">
                        <img class="work-img" src="` + data[i].img + `" alt="bannière de ` + data[i].title + `">
                        <div class=" work-category">`
                            + categories +
                        `</div>
                        <div class="work-content">
                            <h3 class="work-content-title">` + data[i].title + `</h3>
                            <p class="work-content-text">` + data[i].description + `</p>
                        </div>
                        <div class="visitButton">
                            <p>Visiter</p>
                        </div>
                    </a>
                </article>`
    }
}

fetchJSONData()