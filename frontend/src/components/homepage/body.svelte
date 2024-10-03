<script>
        import img1 from "$lib/pictures/img1.png";
        import { goto } from '$app/navigation';


        function test() {
            goto("/catalog?brand_id=1");
        }

</script>

<div class="body">
    <div class="body_title">
        <!-- <p>That's a place, where you can buy something interesting</p> -->
        <h1>Find Your Dream Car</h1>
    </div>

    <div class="body_search">
        <input class="body_search__input" type="text" placeholder="Brand" list="options">
        <datalist id="options">
            <option value="Audi"> 
            <option value="Вариант 2">
            <option value="Вариант 3">
        </datalist>

        <input class="body_search__input" type="text" placeholder="Model" list="options">
        <datalist>
            <option value="Вариант 1">
            <option value="Вариант 2">
            <option value="Вариант 3">
        </datalist>

        <input class="body_search__input" type="text" placeholder="Year">
        <input class="body_search__input" type="text" placeholder="Price">
        <!-- <button class="body_search__button" on:click={giveDataToRequest}><svg width="13" height="13" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.86875 0.790088C4.83542 0.790088 3.89375 1.04009 3.04375 1.54009C2.19375 2.04009 1.51042 2.72342 0.99375 3.59009C0.477083 4.45675 0.21875 5.39842 0.21875 6.41509C0.21875 7.43175 0.477083 8.37342 0.99375 9.24009C1.51042 10.1068 2.19375 10.7901 3.04375 11.2901C3.89375 11.7901 4.83542 12.0401 5.86875 12.0401C6.50208 12.0401 7.11875 11.9318 7.71875 11.7151C8.31875 11.4984 8.86875 11.2068 9.36875 10.8401L11.7188 13.1401C11.8188 13.2734 11.9604 13.3401 12.1438 13.3401C12.3271 13.3401 12.4771 13.2818 12.5938 13.1651C12.7104 13.0484 12.7688 12.8984 12.7688 12.7151C12.7688 12.5318 12.7021 12.3901 12.5688 12.2901L10.2688 9.94009C10.6354 9.44009 10.9271 8.89009 11.1438 8.29009C11.3604 7.69009 11.4688 7.07342 11.4688 6.44009C11.4688 5.40675 11.2188 4.45675 10.7188 3.59009C10.2188 2.72342 9.53542 2.04009 8.66875 1.54009C7.80208 1.04009 6.86875 0.790088 5.86875 0.790088ZM5.86875 2.04009C6.66875 2.04009 7.40208 2.24009 8.06875 2.64009C8.73542 3.04009 9.26042 3.57342 9.64375 4.24009C10.0271 4.90675 10.2188 5.63175 10.2188 6.41509C10.2188 7.19842 10.0271 7.93175 9.64375 8.61509C9.26042 9.29842 8.73542 9.83175 8.06875 10.2151C7.40208 10.5984 6.66875 10.7901 5.86875 10.7901C5.06875 10.7901 4.33542 10.5984 3.66875 10.2151C3.00208 9.83175 2.46875 9.29842 2.06875 8.61509C1.66875 7.93175 1.46875 7.19842 1.46875 6.41509C1.46875 5.63175 1.66875 4.90675 2.06875 4.24009C2.46875 3.57342 3.00208 3.04009 3.66875 2.64009C4.33542 2.24009 5.06875 2.04009 5.86875 2.04009Z" fill="white"/>
            </svg>
            </button> -->
            <input type="button" value="test" on:click={test}>
    </div>

    <div class="body_image">
        <img src="{img1}" alt="">
    </div>
</div>

<style>
 .body {
        height: 740px;
        background-color: #EEF1FB;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 60px;
    }

    .body_title {
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        color: #050B20;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .body_search {
        width: 960px;
        height: 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px 5px 10px;
        background-color: #ffffff;
        border-radius: 50px;
    }

    .body_search__input {
        flex-grow: 1;
        border: none;
        height: 50px;
        text-align: center;
    }

    .body_search__button {
        /* Button */

        box-sizing: border-box;

        width: 55px;
        height: 55.75px;
        right: 9.98px;
        top: calc(50% - 55.75px/2);

        background: #405FF2;
        border: 1px solid #405FF2;
        border-radius: 60px;

    }

    .body_image {
        display: flex;
        justify-content: center;
    }

    .body_image img {
        /* position: absolute; */
        width: 1166px;
        height: 356px;
        left: calc(50% - 1166px/2);
        top: calc(50% - 356px/2 + 257.67px);

        background: url(.png);

    }    
</style>