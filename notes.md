focus on route change:

new Vue({
    router,
    watch: {
        $route: function() {
            this.$nextTick(function () {
            // $nextTick = DOM updated

            });
        }
    }
}).$mount('#app');

<router-view ref="routerView"></router-view>

let focusTarget =
    (this.$refs.routerView.$refs.componentFocusTarget !== undefined)
        ? this.$refs.routerView.$refs.componentFocusTarget
        : this.$refs.routerView.$el;

focusTarget.setAttribute('tabindex', '-1');

focusTarget.focus();

// Remove tabindex from focustarget.
focusTarget.removeAttribute('tabindex');


from: https://marcus.io/blog/accessible-routing-vuejs?utm_campaign=Vue.js%20News&utm_medium=email&utm_source=Revue%20newsletter