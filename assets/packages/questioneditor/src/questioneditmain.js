import Vue from 'vue';
//import LSCKEditor from '../../meta/LSCKVue/plugin'
import CKEditor from 'ckeditor4-vue';
import VModal from 'vue-js-modal'
import App from './App.vue';
import Loader from './helperComponents/loader.vue';
import getAppState from "./storage/store";
import {PluginLog} from "./mixins/logSystem";

Vue.config.devtools = true;

//Ignore phpunits testing tags
Vue.config.ignoredElements = ["x-test"];

Vue.use( PluginLog );
//Vue.use( LSCKEditor );
Vue.use(CKEditor);
Vue.use(VModal, { dynamic: true });
Vue.component('loader-widget', Loader);

Vue.mixin({
    methods: {
        translate(value) {
            return window.QuestionEditData.i10N[value] || value;
        }
    },
    filters: {
        translate: (value) => {
            return window.QuestionEditData.i10N[value] || value;
        }
    }
});
const AppState = getAppState(window.QuestionEditData.qid);
const questionEditor = new Vue({
    el: '#advancedQuestionEditor',
    store: AppState,
    components: {App},
});

// NB: Enable only for debugging.
// Jessy: Can also define method hasIndividualAnsweroptionCodes in App.vue computed property.
//window.questionEditor = questionEditor;
