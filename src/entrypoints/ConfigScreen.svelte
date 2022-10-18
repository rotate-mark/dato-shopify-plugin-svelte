<script>
  import "~/global.css"
  import TextField from "~/components/TextField.svelte";
  import Button from "~/components/Button.svelte";
  import { onMount } from "svelte";
  export let ctx;

  let shopifyDomain = ctx.plugin.attributes.parameters.shopifyDomain || "";
  let storefrontAccessToken = ctx.plugin.attributes.parameters.storefrontAccessToken || "";

  onMount(() => {
    ctx.updateHeight();
  })

  async function submitConfig() {
    console.log('setting update')
    const values = { shopifyDomain, storefrontAccessToken };
    await ctx.updatePluginParameters(values);
    ctx.notice('Settings updated successfully!');
  }
</script>

<div class="Form BaseTheme Container">
  <TextField
    name="shopifyDomain"
    label="Shop ID"
    value={shopifyDomain}
    placeholder="my-shop"
    hint="If your shop is <code>foo-bar.myshopify.com</code>, then insert <code>foo-bar</code>"
    required
  />
  <TextField
    name="storefrontAccessToken"
    label="Storefront access token"
    value={storefrontAccessToken}
    placeholder="XXXYYY"
    hint={`
You can get a Storefront access token by creating a private app. Take a look at <a
  href="https://help.shopify.com/en/api/custom-storefronts/storefront-api/getting-started#authentication"
  target="_blank"
  rel="noreferrer noopener"
>
  Shopify documentation
</a> for more info
    `}
    required
  />
  <Button
    label="Submit"
    onClick={submitConfig}
  />
</div>
