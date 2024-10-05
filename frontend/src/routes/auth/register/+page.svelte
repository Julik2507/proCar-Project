<script>
    import InnerWrapper from "../../../components/auth/register/inner_wrapper.svelte";
	import Header from "../../../components/homepage/header.svelte";

    // import apiLogoutUser from "$lib/axios"
    // import { goto } from '$app/navigation';

    // export async function logoutUser() {
    //     try {
    //         console.log(2);
            
    //         await apiLogoutUser();
    //         goto('/');
    //     } catch(err) {
    //         console.log(err);
    //     }

    // }
</script>

<div class="container">
    <Header/>
    <div class="wrapper">
        <InnerWrapper/>
    </div>
</div>



<style>
    .container {
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        height: 100vh;
        display: flex;
        justify-content: center;
        /* align-items: center; */
        background-color: #EEF1FB;
        padding-top: 80px;
    }
</style>