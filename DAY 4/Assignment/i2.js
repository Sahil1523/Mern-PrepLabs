const data = [
    {   
    image : "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcml5YW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title : "Biriyani",
    data : "deksieolnflrbgibglsrngildgufdbgufndjkvnfskkdlkdsbgurfieslbfkjfbgkbf"
    },
    {
        image : "https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        title : "Pasta",
        data  : "ejfeoiadflsbliugaheowifhifhor9ihgo9irhgoirehgoihgoiehgoirhoirhg"
    },
    {
        image : "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFjb3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        title : "Tacos",
        data : "ejkrowinflesnfiewgheoifhlsifighoifshoirhfishfihsiofhirohforishf"
    },
    {
        image : "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        title : "Burger",
        data : "fjksreiodjwdefbveuisdhailflidfukgfolsfbilsdbflsdbglisflisfv"
    },
    {
        image : "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        title : "Pizza",
        data : "djfbsruifhiogfeufdbfugfeibfkjsufhsihflebuesgfoegfoihfoiegf"
    }, 
    {
        image : "https://images.unsplash.com/photo-1633896949673-1eb9d131a9b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        title : "Shawarma Roll",
        data :  "kudefrufejkdbfjegfusfjhsfkesufguesgfuesgfkjsdbfhsdfysfgueskgfuskfg"
    },
    {
        image : "https://images.unsplash.com/photo-1547414368-ac947d00b91d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        title : "Cheesecake",
        data : "fdsgbehjkdvfdfksdkcsksvdbhxsncbhjskc xbnhdcjb hxdjchvfbdcjvhdcnh"
    }
];

const foodBox=document.getElementById("showfood");

for(let i=0;i<data.length;i++){
const div=document.createElement("div");
const image=document.createElement("img"); 
image.src=data[i].image;
image.style.height = "200px";
const foodTitle=document.createElement("h2");
foodTitle.innerText=data[i].title;
const fdata=document.createElement("p"); 
fdata.innerText=data[i].data; 
fdata.style.display="none";
const btn1= document.createElement("button"); 
btn1.innerText="Click to know more";
const btn2=document.createElement("button"); 
btn2.innerText="Tap to Close IT!";
btn1.addEventListener("click",()=>{ 
    if(fdata.style.display==="none")
    {
    fdata.style.display="block";
}

else{
fdata.style.display="block";

}
});

btn2.addEventListener("click",()=>
{ 
    if(fdata.style.display==="block")
    { 
        fdata.style.display="none";
}
else{

fdata.style.display="block";
}
});

div.append(image,foodTitle,fdata,btn1,btn2); 
foodBox.append(div);
}
