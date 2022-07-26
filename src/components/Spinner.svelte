<script>
  export let content;
</script>

<div class="Spinner">
  <span class="Spinner__content">{content}</span>
  <div class="Spinner__wrapper" style="width: 12px; height: 12px; margin-left: 12px; transform: translateY(33%);">
    <div
      class="Spinner__bar"
      style="animation-delay: -1.2s; transform: rotate(0deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -1.1s; transform: rotate(30deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -1s; transform: rotate(60deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.9s; transform: rotate(90deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.8s; transform: rotate(120deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.7s; transform: rotate(150deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.6s; transform: rotate(180deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.5s; transform: rotate(210deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.4s; transform: rotate(240deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.3s; transform: rotate(270deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.2s; transform: rotate(300deg) translate(146%);"
    />
    <div
      class="Spinner__bar"
      style="animation-delay: -0.1s; transform: rotate(330deg) translate(146%);"
    />
  </div>
</div>

<style>
  @keyframes Spinner__spin {
    from {
      opacity: 1;
    }
    to {
      opacity: .15;
    }
  }

  .Spinner__wrapper {
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }

  .Spinner__bar {
    -webkit-animation: Spinner__spin 1.2s linear infinite;
    animation: Spinner__spin 1.2s linear infinite;
    background-color: var(--light-body-color);
    height: 14%;
    left: -20%;
    position: absolute;
    top: 0;
    width: 40%;
  }
</style>