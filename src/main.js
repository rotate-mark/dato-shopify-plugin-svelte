import { connect } from 'datocms-plugin-sdk';
import { renderPluginConfigScreen, shopifyVariantSelector } from './utils/SvelteRender';

connect({
  manualFieldExtensions(ctx) {
    return [
      {
        id: 'shopifyVariant',
        name: 'Shopify Variant',
        type: 'editor',
        fieldTypes: ['json']
      }
    ]
  },
  renderConfigScreen(ctx) {
    return renderPluginConfigScreen(ctx);
  },
  renderFieldExtension(fieldExtensionId, ctx) {
    switch (fieldExtensionId) {
      case 'shopifyVariant':
        return shopifyVariantSelector(ctx)
    }
  },
});
