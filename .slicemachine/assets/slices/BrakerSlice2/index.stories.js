import MyComponent from '../../../../slices/BrakerSlice2';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/BrakerSlice2'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"braker_slice2","items":[],"primary":{"title":[{"type":"heading1","text":"Recontextualize viral technologies","spans":[]}],"description":[{"type":"paragraph","text":"Enim culpa et eiusmod irure cillum nisi nostrud. Sunt est commodo veniam ea veniam laboris adipisicing aliquip excepteur nostrud proident.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
