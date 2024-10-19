async function fetchSkillList(){
    fetch("../json/data.json")
    .then(async (data) => {
        if (data.ok) {
            data = await data.json()
            displaySkills(data.skills)
        }
    }).catch((error) => {
        console.error(error);
    });
}

function displaySkills(data){
    // Get dev section
    let devSkillsSection = document.querySelector("#devSkills")
    for(let i = 0; i < data[0].developpment.length; i++){
        let rating = ""
        for(let r = 0; r < data[0].developpment[i].rating; r++){
            rating += '<i class="fa-solid fa-star"></i>'
        }
        for(let r = data[0].developpment[i].rating; r < 5; r++){
            rating += '<i class="fa-regular fa-star"></i>'
        }

        devSkillsSection.innerHTML += `<div class="competence card card-grey" data-skill-id="` + data[0].developpment[i].id + `">
                            <img class="competence-img" src="` + data[0].developpment[i].img + `" alt="test logo">
                            <p class="box-color-title">` + data[0].developpment[i].title + `</p>
                            <div class="competence-rate">`
                            + rating +
                            `</div>
                        </div>`
    }
    
    // Get design section
    let designSkillsSection = document.querySelector("#designSkills")
    for(let i = 0; i < data[0].design.length; i++){
        let rating = ""
        for(let r = 0; r < data[0].design[i].rating; r++){
            rating += '<i class="fa-solid fa-star"></i>'
        }
        for(let r = data[0].design[i].rating; r < 5; r++){
            rating += '<i class="fa-regular fa-star"></i>'
        }

        designSkillsSection.innerHTML += `<div class="competence card card-grey" data-skill-id="` + data[0].design[i].id + `">
                            <img class="competence-img" src="` + data[0].design[i].img + `" alt="test logo">
                            <p class="box-color-title">` + data[0].design[i].title + `</p>
                            <div class="competence-rate">`
                            + rating +
                            `</div>
                        </div>`
    }
    
    
    // Get other section
    let otherSkillsSection = document.querySelector("#otherSkills")
    for(let i = 0; i < data[0].autre.length; i++){
        let rating = ""
        for(let r = 0; r < data[0].autre[i].rating; r++){
            rating += '<i class="fa-solid fa-star"></i>'
        }
        for(let r = data[0].autre[i].rating; r < 5; r++){
            rating += '<i class="fa-regular fa-star"></i>'
        }

        otherSkillsSection.innerHTML += `<div class="competence card card-grey" data-skill-id="` + data[0].autre[i].id + `">
                            <img class="competence-img" src="` + data[0].autre[i].img + `" alt="test logo">
                            <p class="box-color-title">` + data[0].autre[i].title + `</p>
                            <div class="competence-rate">`
                            + rating +
                            `</div>
                        </div>`
    }
}

fetchSkillList()