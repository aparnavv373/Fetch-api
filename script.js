  
            const buttonElement=document.getElementById("btn")
            const imageElement=document.getElementById("flag")
            const name=document.getElementById("name")
            const population=document.getElementById("population")
              const region=document.getElementById("region")
               const subregion=document.getElementById("sub")
                const currencies=document.getElementById("currencies")
                 const capital=document.getElementById("capital")
                  const language=document.getElementById("language")
                   const border=document.getElementById("border")
            
            async function displaydetails(url){
                try{
                    const response=await fetch(url);
                    if(!response.ok){
                        throw new Error(`HTTP error!status:${response.status}`)

                    }
                    const data=await response.json();
                    name.innerText=data[0].name.common
                    population.innerText=`Population: ${data[0].population}`
                    region.innerText=`Region: ${data[0].region}`
                    subregion.innerText=`Subregion: ${data[0].subregion}`
                    const currencyObj=data[0].currencies
                    const currencyCode = Object.keys(currencyObj)[0];
                    currencies.innerText = `Currency: ${currencyObj[currencyCode].name}`
                    capital.innerText=`Capital: ${data[0].capital[0]}`
                    language.innerText=`Languages: ${Object.values(data[0].languages).join(" ,")}`
                    imageElement.src=data[0].flags.png 
                    
                } catch(error){
                      name.innerText="Country not found"
                      imageElement.src=""
                       population.innerText=""
                       region.innerText=""
                       subregion.innerText=""
                       currencies.innerText=""
                       capital.innerText=""
                       language.innerText=""

                }  
            }
            buttonElement.addEventListener("click",()=>{

                 const searchBox = document.getElementById("search");
                 const val = searchBox.value;
                 if(val==="") return;
                 const url=`https://restcountries.com/v3.1/name/${val}`;
                 displaydetails(url)
                 searchBox.value=""
                 searchBox.blur();

                 
            })
      