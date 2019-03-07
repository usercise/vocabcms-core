import VocabCMS from "./VocabCMS";
import LoadingScreen from './template/LoadingScreen';
import PluginManager from './PluginManager';
import InfinityLoader from './component/InfinityLoader';
import logger from './Logger';

export default VocabCMS;

export const pluginManager = new PluginManager();

logger.info('Register vocabcms-core in pluginManager');
pluginManager.register('vocabcms-core', {
  displayName: 'Core',
  components: {
    'InfinityLoader': InfinityLoader,
  },
  templates: {
    'LoadingScreen': LoadingScreen,
  },
})
