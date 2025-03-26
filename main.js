const url = "https://raw.githubusercontent.com/hanakkristof/datajson/refs/heads/main/data.json"

getData(url, renderWork)

function renderWork(data) {
    console.log(data);
    data.forEach(({ id, title, photo_url, repo_link, topics, site_link }) => {
        let temakorok = ""
        console.log(site_link);
        topics.forEach(x => {
            temakorok += `<li>${x}</li>`
        })
        document.getElementById("work").innerHTML +=
        `<div id="project" class="myworks"> <div id="innerpr"> <div class=workkep"> <img src="${photo_url}" alt="" id="munkaImg"> </div> <div class="workszoveg"> <h1>${title}</h1> <h3>Témakörök</h3> <ul id="workitems"${temakorok}</ul> <a target="_blank" href="${site_link}">Site link</a> <a target ="_blank" href="${repo_link}">Repo link</a></div></div></div>`

    });

}