// Vuetify
// VApp
// VAlert
// VAutocomplete
// VAvatar
// VBadge
// VBottomNav
// VBottomSheet
// VBreadcrumbs
// VBtn
// VBtnToggle
// VCard
// VCarousel
// VCheckbox
// VChip
// VCombobox
// VCounter
// VDataIterator
// VDataTable
// VDatePicker
// VDialog
// VDivider
// VExpansionPanel
// VFooter
// VForm
// VGrid
// VIcon
// VInput
// VJumbotron
// VLabel
// VList
// VMenu
// VMessages
// VNavigationDrawer
// VOverflowBtn
// VPagination
// VParallax
// VPicker
// VProgressCircular
// VProgressLinear
// VRadioGroup
// VRangeSlider
// VSelect
// VSlider
// VSnackbar
// VSpeedDial
// VStepper
// VSubheader
// VSwitch
// VSystemBar
// VTabs
// VTextarea
// VTextField
// VTimePicker
// VToolbar
// VTooltip
// Transitions

import Vue from 'vue';
import colors from 'vuetify/es5/util/colors';

import Vuetify from 'vuetify';

Vue.use(Vuetify, {
  theme: {
    primary: colors.teal.base,
    secondary: colors.teal.darken2,
    accent: colors.purple.base,
    error: colors.deepOrange.darken2,
    warning: colors.orange.darken2,
    info: colors.blueGrey.darken2,
    success: colors.green.darken1
  }
});
