

const fetchData = async () => {
    const itemEl = document.querySelector("#items");

    fetch("https://fakestoreapi.com/products/",{method : "post", body: "hello guys, how far "})
    .then((response) => response.json())
    .then((data) => {
        if(isloading){
            itemEl.innerHTML = "loading..."
        
        }
        data.map(item => {
            const itemEl = `
                <div >
                    <img src=${item.image} alt="">
                    <p>${item.title} </p>

                </div>
            `;
            itemEl.innerHTML += itemEl;

        });
        
    })
    .catch((error) =>console.log(error))
    .finally(()=>(isloading = false));
}
async function getData(){
    try{
        const response = await fetch("https://fakestoreapi.com/products/");
        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.log(error)
    }finally{
        isloading = false
    }
    

}
fetchData();




