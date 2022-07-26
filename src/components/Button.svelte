<script>
  export let label;
  export let variation = "primary";
  export let onClick = () => {};
  export let disabled = false;

  $: rootClass = ["Button", `Button--type-${variation}`].join(' ')
</script>

<button class={rootClass} on:click={onClick} {disabled}>{label}</button>

<style>
  .Button {
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: transparent;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--base-body-color);
    cursor: pointer;
    display: inline-block;
    font-family: inherit;
    font-weight: var(--font-weight-bold);
    line-height: inherit;
    opacity: 1;
    text-decoration: none;
    transition: all .3s var(--material-ease);
    vertical-align: middle;
    white-space: nowrap;
    font-size: 1.1em;
    padding: 0.7em 1em;
  }

  .Button--type-primary {
    background-color: var(--accent-color);
    color: #fff;
  }

  .Button:disabled {
    background-color: var(--disabled-bg-color);
    color: rgba(0,0,0,.2);
    cursor: not-allowed;
  }
</style>