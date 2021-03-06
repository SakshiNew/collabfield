// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap'
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("posts/modal")
require("posts/style")
import $ from 'jquery'
window.jQuery = $;
window.$ = $;

// require("posts/infinite_scroll")
require("packs/conversations/position_and_visibility")
require("packs/conversations/toggle_window")
require("packs/conversations/messages_infinite_scroll")
require("packs/conversations/conversation")
require("channels/shared/conversation")
// require("channels/private/conversation_channel")
// require("channels/consumer")
// require("channels/index")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
