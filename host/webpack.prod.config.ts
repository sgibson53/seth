import { withModuleFederation } from '@nx/angular/module-federation';
import config from './module-federation.config';

/**
 * DTS Plugin is disabled in Nx Workspaces as Nx already provides Typing support for Module Federation
 * The DTS Plugin can be enabled by setting dts: true
 * Learn more about the DTS Plugin here: https://module-federation.io/configure/dts.html
 */
export default withModuleFederation(
  {
    ...config,
    remotes: [
      ['shop', 'http://localhost:3000/shop'],
      ['cart', 'http://localhost:3000/cart'],
      ['about', 'http://localhost:3000/about'],
    ]
  },
  { dts: false }
);
