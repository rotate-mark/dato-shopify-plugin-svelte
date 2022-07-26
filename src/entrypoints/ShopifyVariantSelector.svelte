<script>
  import { onMount, tick } from "svelte";
  import { SiteClient } from 'datocms-client';
  import { getShopifyProduct } from "~/utils/ShopifyClient";
  import Section from "~/components/Section.svelte";
  import Spinner from "~/components/Spinner.svelte";
  import TextField from "~/components/TextField.svelte";
  import Button from "~/components/Button.svelte";
  

  export let ctx;

  let productSearch = "";
  let searching = false;
  let variantOptions = [];
  let selectorValue;

  const { shopifyDomain, storefrontAccessToken, datocmsReadToken } = ctx.plugin.attributes.parameters
  const cmsClient = new SiteClient(datocmsReadToken)

  $: currentProductId = ctx.formValues.product;
  $: currentValue = ctx.formValues[ctx.fieldPath];

  function updateSelectedValue(currentValue) {
    selectorValue = currentValue
  }

  $: {
    updateSelectedValue(currentValue)
  }

  $: isSameVariant = currentValue === selectorValue

  async function handleSearch(e) {
    if (e.key === "Enter") {
      searching = true;
      variantOptions = [];
      await tick()
      if (!productSearch) {
        await cmsClient.items.find(currentProductId).then(productRecord => { productSearch = productRecord.product })
      }
      getShopifyProduct(shopifyDomain, storefrontAccessToken, productSearch).then(resp => {
        const product = resp.data.product
        const options = []
        product.variants.nodes.forEach(variant => {
          const defaultVariant = {
            product: product.id,
            variant: variant.id,
            sellingPlan: null
          }
          options.push({ label: `${variant.title} - No selling plan`, value: defaultVariant })
          variant.sellingPlanAllocations?.nodes.forEach(sellingPlanNode => {
            const variantValue = { ...defaultVariant }
            variantValue.sellingPlan = sellingPlanNode.sellingPlan.id
            options.push({ label: `${variant.title} - ${sellingPlanNode.sellingPlan.name}`, value: variantValue })
          })
        })
        variantOptions = options
        searching = false
      }).catch(e => {
        console.error(e)
        searching = false
      })
    }
  }

  async function updateVariant() {
    ctx.setFieldValue(ctx.fieldPath, selectorValue)
  }

  onMount(() => {
    ctx.startAutoResizer();
  });
</script>

<div class="PluginContainer BaseTheme">
  <Section title="Variant Selector">
    Auto-fetch related product variants if the input field is empty.<br/>
    <pre>{typeof currentValue === 'object' ? JSON.stringify(currentValue, null, 2) : currentValue}</pre>
  </Section>
  <TextField
    name="productSearch"
    label="Search Product Handle"
    value={productSearch}
    placeholder="product-handle"
    hint="Press enter to search target product variants/selling plans, Empty to search linked product"
    onKeyup={handleSearch}
    disabled={searching}
  />
  {#if searching}
    <Spinner content={`Fetching product: ${productSearch}`} />
  {/if}
  {#if variantOptions.length}
  <div class="VarinatOptions">
    {#each variantOptions as variantOption (variantOption.label)}
    <label class="RadioField">
      <input type="radio" name="product_variant" bind:group={selectorValue} value={JSON.stringify(variantOption.value, null, 2)} />
      {variantOption.label}
    </label>
    {/each}
  </div>
  <Button label="Submit" onClick={updateVariant} disabled={isSameVariant} />
  {/if}
</div>

<style>
  .RadioField {
    display: block;
    line-height: 2;
  }
</style>