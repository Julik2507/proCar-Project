<script>
	import Body from "../components/homepage/body.svelte";
	import Footer from "../components/homepage/Footer.svelte";
	import Header from "../components/homepage/header.svelte";
</script>

<body>
    <div class="wrapper">
        <Header/>    
        <Body/>
        <Footer/>
    </div>
    
</body>

<style>
    body {
        margin: 0px;
    }

    .wrapper {
        /* display: flex; */
        height: 100vh;
        width: auto;
    }

</style>