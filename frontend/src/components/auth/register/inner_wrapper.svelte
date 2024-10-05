<script>
    import InnerHeader from "./Inner_header.svelte";
    import InnerBody from "./Inner_body.svelte";
    import InnerFooter from "./Inner_footer.svelte";

    import {apiRegisterUser} from '$lib/api/apiAuth.ts';
    import { goto } from '$app/navigation';


    let tempMessage;

    async function register(params) {
        try {
            await apiRegisterUser(params.detail);
            await goto("/");

        } catch(err) {
            if(err.response == undefined) {
                tempMessage = err.message;
            } else {
                tempMessage = err.response.data.message;
            }
        }

    }

</script>

<div class="inner_wrapper">
    <InnerHeader/>
    <InnerBody on:click={register}/>
    <InnerFooter errorMessage={tempMessage}/>
</div>

<style>
.inner_wrapper {
    display: flex;
    width: 500px;
    height: 500px;
    background-color: #FFFEFE;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    /* width: 383px; */
    padding: 80px;
    flex-direction: column;
}
</style>