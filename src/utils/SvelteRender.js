import ConfigScreen from "~/entrypoints/ConfigScreen.svelte";
import ShopifyVariantSelector from '~/entrypoints/ShopifyVariantSelector.svelte';

export function shopifyVariantSelector(ctx) {
  const el = document.getElementById('root');
  while (el.firstChild) el.removeChild(el.firstChild);
  new ShopifyVariantSelector({
    target: document.getElementById('root'),
    hydrate: true,
    props: { ctx }
  })
}

export function renderPluginConfigScreen(ctx) {
  new ConfigScreen({
    target: document.getElementById('root'),
    hydrate: true,
    props: { ctx }
  })
}