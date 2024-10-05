<script>
    import Header from "../../../components/homepage/header.svelte";
    import InnerWrapperLogin from "../../../components/auth/login/Inner_wrapper_login.svelte";

</script>

<div class="container">
    <Header/>
    <div class="wrapper">
        <InnerWrapperLogin/>
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