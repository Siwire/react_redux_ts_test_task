import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'

import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';

import AppMenuItem from './AppMenuItem'

const appMenuItems = [
  {
    name: 'List Cat',
    link: '/listcat',
    Icon: ListIcon,
  },
  {
    name: 'Add New Cat',
    link: '/addcat',
    Icon: AddIcon,
  },
]

const AppMenu: React.FC = () => {
  const classes = useStyles()

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)

export default AppMenu