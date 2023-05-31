const data = [
    {   
    image : "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
    title : "Avengers",
    rating : 8
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Batman_Infobox.jpg/220px-Batman_Infobox.jpg",
        title : "Batman",
        rating : 7
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/3/30/Fast_%26_Furious_6_film_poster.jpg",
        title : "Fast and furious",
        rating : 6
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Missionimpossibleblurayboxset.jpg/220px-Missionimpossibleblurayboxset.jpg",
        title : "Mission impossible",
        rating : 7
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/2/21/Kimetsu_no_Yaiba_Mugen_Ressha_Hen_Poster.jpg",
        title : "Demon slayer",
        rating : 9
    }, 
    {
        image : "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Godzilla_vs._Kong.png/220px-Godzilla_vs._Kong.png",
        title : "Godzilla",
        rating : 6
    },
    {
        image : "https://upload.wikimedia.org/wikipedia/en/7/74/Ready_Player_One_%28film%29.png",
        title : "Ready player One",
        rating : 6.5
    },
];

//const movieBox : document.getElementById();
//data.map(el) :>{


//}
const movieBox = document.getElementById("showmovie");

for(let i=0;i<data.length;i++)
{
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = data[i].image;
    const movieTitle = document.createElement("h5");
    movieTitle.innerText = data[i].title;
    const rating = document.createElement("h3");
    rating.innerText = data[i].rating;
    const button = document.createElement("button");
    button.innerText="Click Movie";
    button.addEventListener("click", () => {
        alert("You have clicked on " +data[i].title);
      })
    div.append(image, movieTitle, rating, button);
    movieBox.append(div);


}