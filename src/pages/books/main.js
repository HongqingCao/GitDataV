import Vue from 'vue'
import Book from './Book'

const app = new Vue(Book)
app.$mount()

export default{
  config: {
    enablePullDownRefresh: true
  }
}
