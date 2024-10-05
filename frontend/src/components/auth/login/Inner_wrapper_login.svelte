<script>
    import InnerHeaderLogin from './Inner_header_login.svelte';
    import InnerBodyLogin from './Inner_body_login.svelte';
    import InnerFooterLogin from './Inner_footer_login.svelte';

    import {apiLoginUser} from '$lib/api/apiAuth.ts';
    import { goto } from '$app/navigation';

    let tempMessage;

    async function register(params) {
        try {
            await apiLoginUser(params.detail);
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
    <InnerHeaderLogin/>
    <InnerBodyLogin on:click={register}/>
    <InnerFooterLogin errorMessage={tempMessage}/>
</div>

<style>
    .inner_wrapper {
        display: flex;
        width: 500px;
        height: 500px;
        background-color: #FFFEFE;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
        /* width: 383px; */
        padding: 80px;
        flex-direction: column;
        gap: 0px;
    }
</style>