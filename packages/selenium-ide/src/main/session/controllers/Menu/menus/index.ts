import { Menu } from 'electron'
import { Session } from 'main/types'
import application from './application'
import editBasics from './editBasics'
import projectEditor from './projectEditor'
import projectView from './projectView'
import testEditor from './testEditor'
import textField from './textField'

export interface Menus {
  [key: string]: (session: Session) => (...args: any[]) => Menu
}

const menus = {
  application,
  editBasics,
  projectEditor,
  testEditor,
  projectView,
  textField,
} as const

export default menus
