import VocabCMS from "./VocabCMS";
import LoadingScreen from './template/LoadingScreen';
import PluginManager from './PluginManager';
import InfinityLoader from './component/InfinityLoader';

export default VocabCMS;

export const pluginManager = new PluginManager();

pluginManager.register('vocabcms-core', {
  displayName: 'Core',
  components: {
    'InfinityLoader': InfinityLoader,
  },
  templates: {
    'LoadingScreen': LoadingScreen,
  },
})
