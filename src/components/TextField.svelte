<script>
  export let name;
  export let label;
  export let value;
  export let placeholder;
  export let hint;
  export let required = false;
  export let disabled = false;
  export let onKeyup = () => {};
</script>

<div class="FieldGroup__item">
  {#if label}
  <label for={name} class="FormLabel">
    <span class="FormLabel__label">{label}{#if required}<span class="FormLabel__required">*</span>{/if}</span>
  </label>
  {/if}
  <input type="text" class="TextInput" id={name} {name} placeholder={placeholder} {disabled} bind:value on:keyup={onKeyup}>
  {#if hint}<div class="FieldHint">{@html hint}</div>{/if}
</div>

<style>
  .TextInput {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: none;
    border: 1px solid var(--border-color);
    border-radius: 0;
    box-sizing: border-box;
    display: block;
    font-family: inherit;
    font-size: var(--font-size-m);
    padding: 10px;
    resize: none;
    transition: border .2s var(--material-ease);
    width: 100%;
  }
</style>