import m from 'mithril'
import * as top from './top/index.js'


m.route(document.querySelector('#entrypoint'), '/', {
    '/': top.top_page,
})
