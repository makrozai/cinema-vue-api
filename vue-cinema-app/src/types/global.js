import namespace from '@/utils/namespace';

export default namespace('global', {
  actions: [
    'changeLanguaje'
  ],
  getters: [
    'processing',
    'languaje'
  ],
  mutations: [
    'startProcessing',
    'stopProcessing',
    'setLanguage'
  ]
});