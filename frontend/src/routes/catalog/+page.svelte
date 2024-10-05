<script>
	import CatalogBody from "../../components/catalog/CatalogBody.svelte";
	import Footer from "../../components/homepage/Footer.svelte";
    import Header from "../../components/homepage/header.svelte";
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