import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import main from '../../src/views/newEd/main.vue'
import header from '../../src/views/newEd/header'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('Main.vue', () =>{
  test('setup correctly', () => {
      expect(true).toBe(true)
  })
})

describe('header.vue', () => {
  it('renders open project', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <OpenProject />)).toBe(true)
  })
})

describe('header.vue', () => {
  it('renders new project', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains(<NewProject />)).toBe(true)
  })
})


describe('header.vue', () => {
  it('renders themes ', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <Themes />)).toBe(true)
  })
})

describe('header.vue', () => {
  it('renders menu', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <v-menu></v-menu>)).toBe(true)
  })
})


describe('header.vue', () => {
  it('renders snackbars', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <v-snackbar></v-snackbar>)).toBe(true)
  })
})


describe('header.vue', () => {
  it('renders list tile', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <v-list-tile></v-list-tile>)).toBe(true)
  })
})

describe('header.vue', () => {
  it('renders buttons', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <v-btn></v-btn>)).toBe(true)
  })
})



describe('main.vue', () => {
  it('renders side menu', () => {
    const wrapper = shallowMount(main, {

    })
    expect(wrapper.contains( <sideMenu/>)).toBe(true)
  })
})

describe('main.vue', () => {
  it('renders buttons', () => {
    const wrapper = shallowMount(header, {

    })
    expect(wrapper.contains( <v-btn></v-btn>)).toBe(true)
  })
})

describe('main.vue', () => {
  it('renders preview', () => {
    const wrapper = shallowMount(main, {

    })
    expect(wrapper.contains( <preview/>)).toBe(true)
  })
})

describe('main.vue', () => {
  it('renders slidecontroller', () => {
    const wrapper = shallowMount(main, {

    })
    expect(wrapper.contains( <SlideController/>)).toBe(true)
  })
})

describe('main.vue', () => {
  it('renders slidelist', () => {
    const wrapper = shallowMount(main, {

    })
    expect(wrapper.contains( <SlideList/>)).toBe(true)
  })
})