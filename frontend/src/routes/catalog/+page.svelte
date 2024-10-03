<script>
	import CatalogBody from "../../components/catalog/CatalogBody.svelte";
	import Footer from "../../components/homepage/Footer.svelte";
    import Header from "../../components/homepage/header.svelte";
    import { onMount } from 'svelte';
    
    let brand_id;

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        brand_id = urlParams.get('brand_id');
        console.log(brand_id);
    });

</script>


<div class="wrapper">
    <Header/>
    <CatalogBody/>
    <Footer/>
</div>

<style>
    .wrapper {
        /* display: flex; */
        height: 100vh;
        width: auto;
    }

</style>