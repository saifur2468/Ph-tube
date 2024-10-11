// Button loading java script code 
const loadcategories = () =>{
    fetch ("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json() )
    .then ((data) => displayCategories (data.categories))
   .catch ((error) => console.log(error));

};

const displayCategories = (categories) =>{
    const categorycontainer = document.getElementById("catagoris");

    categories.forEach(item=> {
        console.log(item);
        const buttoncontainer = document.createElement("div");
        buttoncontainer.innerHTML = `
        <button onclick="loadcategoryvideos(${item.category_id})" class="btn">
        ${item.category}
        </button>
        `;

        const button =document.createElement("button");
        button.classList = "btn";
        button .innerText =item.category; 
      

        categorycontainer.append(buttoncontainer);
        
    });
};

//  vedio loading section er java script program 
 
//  button click show vedio
 const loadcategoryvideos = (id) =>{
    // alert(id);
    fetch (`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json() )
    .then ((data) => displayVideos (data.category))
   .catch ((error) => console.log(error));

 };

const loadvedio = () =>{
    fetch ("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json() )
    .then ((data) => displayVideos (data.videos))
   .catch ((error) => console.log(error));

};


const displayVideos = (videos)=>{
    const vediocontainer = document.getElementById("vedios");

    vediocontainer.innerHTML="";
    // no content add function
    if(videos.length ==0){
        // vediocontainer.classList.remove("grid");
        vediocontainer.innerHTML =`
        <div class="min- h-[300px] w-full flex flex-col gap-5 justify-center items-center  ">
     <img src="incon/Icon.png">
     <h2 class="text-center font-bold text-xl"> 
     No content Here in this category
     </h2>
        </div>
        `
    }
    videos.forEach((videos) => {
        console.log(videos)
        const card= document.createElement("div");
        card.classList = "card card-compact"
        card.innerHTML=
        `
         <figure class="h-[200px] relative" > 
        <img
          src=${videos. thumbnail}
          class="h-full w-full object-cover"
          alt="Shoes" />
         ${
            videos.others.posted_date?.length==0
            ?""
            :` <span class="absolute right-2 bottom-2 bg-black rounded text-white py-1">
            ${getstring(videos.others.posted_date)}</span> `
            

         }
      </figure>
      <div class="px-0 py-2 flex gap-2">
        <div>
        <img  class="w-10 h-10 rounded-full object-cover"src=${videos.authors[0].profile_picture}/>
        </div>
        <div>
        <h2 class="font-bold">${videos.title}</h2>
        <div class="flex items-center gap-2">
        <p class="text-gray-400">${videos.authors[0].profile_name} </p>
        
        ${
            videos.authors[0].verified == true ?
            `<img class="w-5" src="https://cdn-icons-png.flaticon.com/128/7641/7641727.png"></img>`
            :""
        }
       
        </div>
        <p> </p>
        </div>

      </div>
        `;
        vediocontainer.append(card);



});

   
}

//  videos uplodaing time function
function getstring(time){
    const hour = parseInt(time/3600);
    let remaingsecond =time%3600;
    const minute = parseInt(remaingsecond/60);
    remaingsecond =remaingsecond %60;
    return `${hour} hour ${minute} minute ${remaingsecond}  second ago`
}

console.log(getstring(7856));




















loadcategories();
loadvedio();


