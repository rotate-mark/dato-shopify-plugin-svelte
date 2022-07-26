<script>
  export let title;
</script>

<div class="Section">
  <div class="Section__header">
    <div class="Section__title">
      <div class="Section__title__content">{title}</div>
    </div>
  </div>
  <slot></slot>
</div>

<style>
  .Section {
    position: relative;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    color: var(--base-body-color);
    font-family: var(--base-font-family);
    font-size: var(--font-size-m);
    line-height: 1.5;
  }

  .Section__header {
    margin-bottom: var(--spacing-l);
    margin-left: var(--negative-spacing-l);
    margin-right: var(--negative-spacing-l);
    position: relative;
  }

  .Section__header::before {
    background-color: var(--border-color);
    content: "";
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 1;
  }

  .Section__title {
    align-items: center;
    background-color: #fff;
    display: inline-flex;
    font-size: var(--font-size-l);
    font-weight: var(--font-weight-bold);
    margin-left: var(--spacing-m);
    margin-right: var(--spacing-l);
    padding-left: var(--spacing-m);
    padding-right: var(--spacing-m);
    position: relative;
    z-index: 2;
  }
</style>