import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const AppBarExampleIcon = () => (
  <AppBar
    title="Panel administracyjny"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={{
      backgroundColor: '#555',
    }}
  />
);

export default AppBarExampleIcon;
