import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'host',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  remotes: ['shop', 'cart', 'about'],
  shared: (name, config) => {
    // Not using lodash at the time of this change, but this would cause lodash to be bundled into each host/remote
    // separately (not tree-shaken) since if it is naturally a singleton, then nx will bundle all of lodash.
    if (name === 'lodash') {
      return false;
    }
  }
};

export default config;
