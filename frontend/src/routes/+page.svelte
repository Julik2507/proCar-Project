<script>
    import img1 from "$lib/pictures/img1.png";
</script>

<div class="wrapper">
    <div class="header">
        <div class="header_info">
            <h1>PROCARS</h1>
            <div class="header_info__contacts">
                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 1.09521H2.66667C1.4025 1.09521 0.375 2.12271 0.375 3.38688V15.0535C0.375 16.3177 1.4025 17.3452 2.66667 17.3452H9.33333C10.5975 17.3452 11.625 16.3177 11.625 15.0535V3.38688C11.625 2.12271 10.5975 1.09521 9.33333 1.09521ZM10.375 15.0535C10.375 15.6277 9.9075 16.0952 9.33333 16.0952H2.66667C2.0925 16.0952 1.625 15.6277 1.625 15.0535V3.38688C1.625 2.81271 2.0925 2.34521 2.66667 2.34521H9.33333C9.9075 2.34521 10.375 2.81271 10.375 3.38688V15.0535ZM7.45833 4.22021C7.45833 4.56521 7.17833 4.84521 6.83333 4.84521H5.16667C4.82167 4.84521 4.54167 4.56521 4.54167 4.22021C4.54167 3.87521 4.82167 3.59521 5.16667 3.59521H6.83333C7.17833 3.59521 7.45833 3.87521 7.45833 4.22021Z" fill="#050B20"/>
                    </svg>                
                <p>+7 982 190 81 58</p>
            </div>
        </div>

        <div class="header_list">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>

        <div class="header_auth">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5_1492)">
                <path d="M7.96875 8.45C5.70208 8.45 3.96875 8.96667 2.76875 10C1.56875 11.0333 0.96875 12.5167 0.96875 14.45C0.96875 14.6167 1.02708 14.75 1.14375 14.85C1.26042 14.95 1.38542 15 1.51875 15H14.4187C14.5521 15 14.6771 14.95 14.7937 14.85C14.9104 14.75 14.9688 14.6167 14.9688 14.45C14.9688 12.5167 14.3688 11.0333 13.1687 10C11.9688 8.96667 10.2354 8.45 7.96875 8.45ZM2.11875 13.9C2.31875 11 4.26875 9.55 7.96875 9.55C11.6687 9.55 13.6188 11 13.8188 13.9H2.11875ZM7.96875 0C7.30208 0 6.68542 0.158333 6.11875 0.474999C5.55208 0.791666 5.11042 1.23333 4.79375 1.8C4.47708 2.36667 4.31875 3 4.31875 3.7C4.31875 4.4 4.48542 5.05833 4.81875 5.675C5.15208 6.29167 5.59375 6.775 6.14375 7.125C6.69375 7.475 7.30208 7.65 7.96875 7.65C8.63542 7.65 9.24375 7.475 9.79375 7.125C10.3438 6.775 10.7854 6.29167 11.1188 5.675C11.4521 5.05833 11.6188 4.4 11.6188 3.7C11.6188 3 11.4604 2.36667 11.1438 1.8C10.8271 1.23333 10.3854 0.791666 9.81875 0.474999C9.25208 0.158333 8.63542 0 7.96875 0ZM7.96875 6.55C7.26875 6.55 6.66875 6.275 6.16875 5.725C5.66875 5.175 5.41875 4.50833 5.41875 3.725C5.41875 2.94167 5.66042 2.30833 6.14375 1.825C6.62708 1.34167 7.23542 1.1 7.96875 1.1C8.70208 1.1 9.31042 1.35 9.79375 1.85C10.2771 2.35 10.5188 2.98333 10.5188 3.75C10.5188 4.51667 10.2688 5.175 9.76875 5.725C9.26875 6.275 8.66875 6.55 7.96875 6.55Z" fill="#050B20"/>
                </g>
                <defs>
                <clipPath id="clip0_5_1492">
                <rect width="15" height="15" fill="white" transform="matrix(1 0 0 -1 0.46875 15)"/>
                </clipPath>
                </defs>
                </svg>
            <div>
                <a href="/auth/login/" class="header_auth_links">Sign-In |</a>                
                <a class="header_auth_links" href="/auth/register/">Sign-Up</a>
            </div>

        </div>
    </div>

    <div class="body">
        <div class="body_title">
            <p>That's a place, where you can bye something interesting</p>
            <h1>Find Your Dream Car</h1>
        </div>

        <div class="body_search">
            <input class="body_search__input" type="text" placeholder="Brand" list="options">
            <datalist id="options">
                <option value="Вариант 1">
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
            <button class="body_search__button" ><svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.86875 0.790088C4.83542 0.790088 3.89375 1.04009 3.04375 1.54009C2.19375 2.04009 1.51042 2.72342 0.99375 3.59009C0.477083 4.45675 0.21875 5.39842 0.21875 6.41509C0.21875 7.43175 0.477083 8.37342 0.99375 9.24009C1.51042 10.1068 2.19375 10.7901 3.04375 11.2901C3.89375 11.7901 4.83542 12.0401 5.86875 12.0401C6.50208 12.0401 7.11875 11.9318 7.71875 11.7151C8.31875 11.4984 8.86875 11.2068 9.36875 10.8401L11.7188 13.1401C11.8188 13.2734 11.9604 13.3401 12.1438 13.3401C12.3271 13.3401 12.4771 13.2818 12.5938 13.1651C12.7104 13.0484 12.7688 12.8984 12.7688 12.7151C12.7688 12.5318 12.7021 12.3901 12.5688 12.2901L10.2688 9.94009C10.6354 9.44009 10.9271 8.89009 11.1438 8.29009C11.3604 7.69009 11.4688 7.07342 11.4688 6.44009C11.4688 5.40675 11.2188 4.45675 10.7188 3.59009C10.2188 2.72342 9.53542 2.04009 8.66875 1.54009C7.80208 1.04009 6.86875 0.790088 5.86875 0.790088ZM5.86875 2.04009C6.66875 2.04009 7.40208 2.24009 8.06875 2.64009C8.73542 3.04009 9.26042 3.57342 9.64375 4.24009C10.0271 4.90675 10.2188 5.63175 10.2188 6.41509C10.2188 7.19842 10.0271 7.93175 9.64375 8.61509C9.26042 9.29842 8.73542 9.83175 8.06875 10.2151C7.40208 10.5984 6.66875 10.7901 5.86875 10.7901C5.06875 10.7901 4.33542 10.5984 3.66875 10.2151C3.00208 9.83175 2.46875 9.29842 2.06875 8.61509C1.66875 7.93175 1.46875 7.19842 1.46875 6.41509C1.46875 5.63175 1.66875 4.90675 2.06875 4.24009C2.46875 3.57342 3.00208 3.04009 3.66875 2.64009C4.33542 2.24009 5.06875 2.04009 5.86875 2.04009Z" fill="white"/>
                </svg>
                </button>
        </div>

        <div class="body_image">
            <img src="{img1}" alt="">
        </div>
    </div>
    
</div>

<style>
    .wrapper {
        /* display: flex; */
        height: 100vh;
        width: auto;
    }

    .header {
        background-color: #ffffff;
        height: 103.75px;
        /* width: 1920px; */
        padding: 20px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* gap: 60px; */
    }

    .header_info {
        display: flex;
        align-items: center;
        gap: 40px;
    }

    .header_info h1 {
        color: #050B20;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .header_info__contacts {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .header_list {
        display: flex;
        gap: 40px;
        width: 480px;
        justify-content: center;
        /* justify-content: space-around; */
        color: #050B20;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }

    .header_list p {
        color: #050B20;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 20px;
    }

    .header_auth {
        display: flex;
        gap: 15px;
        width: 292.59px;
        align-items: center;
        color: #050B20;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        justify-content: center;
    }

    .header_auth_links {
        text-decoration: none;
        color: #000000;
    }
    
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