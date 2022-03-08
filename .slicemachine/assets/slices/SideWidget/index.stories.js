import MyComponent from '../../../../slices/SideWidget';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/SideWidget'
}


export const _Default = () => ({
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
      mock: {"variation":"default","name":"Default Slice","slice_type":"side_widget","items":[],"primary":{"title":[{"type":"paragraph","text":"Elit aute cillum reprehenderit sint veniam incididunt.","spans":[]}],"description":[{"type":"paragraph","text":"Sunt irure officia excepteur voluptate proident consectetur incididunt laborum pariatur.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default Slice'
