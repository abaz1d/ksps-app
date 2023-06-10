import LucideIcons from './lucide'
// import { Modal, ModalHeader, ModalBody, ModalFooter } from './modal'
// import {
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownContent,
//   DropdownItem,
//   DropdownHeader,
//   DropdownFooter,
//   DropdownDivider
// } from './dropdown'

export default (app) => {
  for (const [key, icon] of Object.entries(LucideIcons)) {
    app.component(key, icon)
  }
}
