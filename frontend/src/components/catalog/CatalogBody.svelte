<script>
    import speedometr from "$lib/pictures/speedometr.svg";
    import petrol from "$lib/pictures/petrol.svg";
    import manual from "$lib/pictures/manual.svg";
</script>

<div class="catalog_wrapper">
    <div class="left_bar">
        <p>filters will be soon!</p>
        <p>ne sdelal diskretky(</p>
    </div>

    <div class="catalog_list">
        <!-- <div class="catalog_list__header">
            <p class="catalog_topic">Find your love!</p>
        </div> -->

        <div class="catalog_list__element">
            <div class="element_top">
                <img class="element_top__image" src="https://avatars.mds.yandex.net/get-autoru-vos/1966039/6f0bcb1b349b081e3958e977ea9ae9b8/456x342" alt="">
            </div>
            <div class="element_buttom__description">
                <div class="bottom_description__header">
                    <h3>Georgeous car!</h3>
                    <p>Year: 2016</p>
                </div>

                <hr>

                <div class="bottom_description_body">
                    <img src="{speedometr}" alt="">
                    <img src="{petrol}" alt="">
                    <img src="{manual}" alt="">       
                </div>

                <hr>

                <div class="bottom_description_end">
                    <p>Price: 22000$</p>
                </div>
            </div>
        </div>

        <!-- <div class="catalog_list__element">
        </div>

        <div class="catalog_list__element">
        </div>

        <div class="catalog_list__element">
        </div> -->

    </div>
</div>

<style>
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

    .bottom_description_end {
        display: flex;
        justify-content: center;
        justify-items: center;
        align-items: center;
    }
</style>