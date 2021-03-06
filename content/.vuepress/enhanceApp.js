// import vuetify from 'vuetify'
import formatDate from 'date-fns/format'
import StatusBubble from './theme/components/StatusBubble'
import FadeInContent from './theme/components/FadeInContent'
import SiteLogo from './theme/components/SiteLogo'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    Vue.filter('formatDate', (date) => {
        return formatDate(date, 'D.M.YYYY')
    })
    Vue.component('StatusBubble', StatusBubble)
    Vue.component('FadeInContent', FadeInContent)
    Vue.component('SiteLogo', SiteLogo)
}