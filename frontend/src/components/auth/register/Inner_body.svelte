<script   script>
    let name;
    let email;
    let password;

    // export let error_message='';

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()

    function sendData() {
        if(name.length && email.length && password.length) {
            dispatch('click', {name, email, password});
            name = '';
            email = '';
            password = '';
        }
    }
</script>

<div class="inner_body">
    <input type="text" class="input_text" placeholder="Ваше имя" bind:value={name}>
    <input type="text" class="input_text" placeholder="Ваш E-mail" bind:value={email}>
    <input type="password" class="input_text" placeholder="Ваш пароль" bind:value={password}>
    <input type="button" value="Зарегистрироваться" class="input_btn" on:click={sendData}>
</div>

<style>
    .inner_body {
        display: flex;
        flex-direction: column;
        gap: 30px;
        width: 72%;
        margin-bottom: 0px;
    }

    .input_text {
        height: 45px;
        background-color: #F5F5F5;
        border: none;
        padding: 5px;
        font-style: italic;
    }

    .input_btn {
        height: 45px;
        background-color: #050B20;
        border: none;
        color: white;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
    }

    /* .inner_footer {
        display: flex;
        gap: 5px;
    }

    .inner_footer p {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
    }

    .inner_footer input {
        width: 15px; */
    /* } */
</style>