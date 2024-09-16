<script>
    import InnerHeader from "./Inner_header.svelte";
    import InnerBody from "./Inner_body.svelte";
    import InnerFooter from "./Inner_footer.svelte";

    import {registerUser} from '$lib/axios'

    async function register(params) {
        await registerUser(params.detail);
    }

</script>

<div class="inner_wrapper">
    <InnerHeader/>
    <InnerBody on:click={register}/>
    <InnerFooter/>
</div>

<style>
.inner_wrapper {
    display: flex;
    width: 582px;
    height: 573px;
    background-color: #FFFEFE;
    border-radius: 10px;
    justify-content: space-around;
    align-items: center;
    /* width: 383px; */
    padding: 80px;
    flex-direction: column;
}
</style>