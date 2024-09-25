<script>
    export let errorMessage='';
</script>

<div class="inner_footer">

    <div class="privacy_info">
        <input type="checkbox">
        <p>Я прочитал и согласен с условиями</p>
    </div>


    <div class="error_viewer">
        <p class="input_error" >{errorMessage}</p>
    </div>

</div>

<style>
    .inner_footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .privacy_info {
        display: flex;
        gap: 7px;
        justify-content: center;
        align-items: center;
    }

    .privacy_info p {
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
    }

    .input_error {
        margin-top: 0px;
        color: red;
        font-weight: 600;
        font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
    }


</style>