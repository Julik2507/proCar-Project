<script>
    import speedometr from "$lib/pictures/speedometr.svg";
    import petrol from "$lib/pictures/petrol.svg";
    import manual from "$lib/pictures/manual.svg";
    import {apiGetBrand} from "$lib/api/apiCatalog.ts";

    function getBrand(brand_id) {
        return apiGetBrand(brand_id);
    }
   
    const urlParams = new URLSearchParams(window.location.search);
    let brand_id = urlParams.get('brand_id');

    console.log(brand_id);

    let arrWithElements = getBrand(brand_id);
    // console.log(arrWithElements);
    

    
</script>

<div class="catalog_wrapper">
    <div class="left_bar">
        <p>filters will be soon!</p>
        <p>ne sdelal diskretky</p>
    </div>

    <div class="catalog_list">

    {#await arrWithElements}
        Sysliki are loading this data...
    {:then arrWithElements} 
        {#each arrWithElements as el}
            
             <div class="catalog_list__element">
                <div class="element_top">
                    <img class="element_top__image" src="http://localhost:3000/{el.img}" alt="">
                </div>

                <div class="element_buttom__description">
                    <div class="bottom_description__header">
                        <h3>Model: {el.name}</h3>
                        <p>Year: {el.year}</p>
                    </div>

                    <hr>

                    <div class="bottom_description_body">
                        <div class="bottom_description_body-item">
                            <img src="{speedometr}" alt="">
                            <p>{el.mileage}</p>
                        </div>

                        <div class="bottom_description_body-item">
                            <img src="{petrol}" alt="">
                            <p>{el.fuel}</p>
                        </div>

                        <div class="bottom_description_body-item">
                            <img src="{manual}" alt="">       
                            <p>{el.gearbox}</p>
                        </div>
                        
                    </div>

                    <hr>

                    <div class="bottom_description_end">
                        <p>Price: {el.price}</p>
                    </div>
                </div>
            </div>
        {/each}
    {/await}


        <!-- <div class="catalog_list__element">
        </div>

        <div class="catalog_list__element">
        </div>

        <div class="catalog_list__element">
        </div> -->

    </div>
</div>

<style>
    p {
        margin: 0px;
    }

    .catalog_wrapper {
        display: flex;
        background-color: #EEF1FB;
        height: 1000px;
    }

    .left_bar {
        background-color: #EEF1FB;
        width: 200px;
        height: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        border: solid 5px #050B20;
    }

    .catalog_list {
        /* height: 100vh; */
        background-color: #EEF1FB;
        flex-grow: 1;
        padding: 30px;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-row-gap: 50px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 430px);        
    }

    .catalog_list__element {
        width: 328px;
        height: 432px;
        background-color: #050B20;
        margin: 10px;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 50%;
        border-radius: 15px;

    }

    .element_top__image {
        width: 100%;
        height: 100%;
        border-radius: 15px 15px 0px 0px;
    }

    .element_buttom__description {
        color: white;
        padding: 10px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 17px;
    }

    .bottom_description__header h3  {
        margin-bottom: 0px;
    }

    .bottom_description_body {
        display: grid;
        /* justify-content: center; */
        justify-items: center;
        align-items: center;
        grid-template-columns: repeat(3, 1fr);
    }

    .bottom_description_body-item {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
    }

    .bottom_description_body-item img {
        height: 20px;
        width: 20px;
    }

    .bottom_description_end {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }
</style>