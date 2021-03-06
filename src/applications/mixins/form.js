import {globalSettings} from '@/utils/util'

export const form = {
  name: "form",
  components: {
  },
  data() {
    return {
      //envType: globalSettings.envType,
    }
  },
  props: {
    elem: {type: Object, default() {}},
    listQuery: {type: Object, default() {}},
    inputInfos: {type: Object, default() {}},
    field: {type: String, default: ''},
    value: {type: String, default: ''},
  },
  computed:{
  },
  methods: {
    replaceCaptchaUrl() {
      this.$refs.captchaDoc['src'] = this.baseMethod.getCaptchaUrl(1)
    },
    handleFilter() {
      this.listQuery[this.field] = this.input;
      this.$emit('update.listQuery');
      this.$emit('handleFilter');
    },
    handleFormChange() {
      this.inputInfos[this.field] = this.input;
    },
  },
}
