import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Material UI
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const Header = props => {
    const classes = props.classes;
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Title
              </Typography>
              <Button component={Link} to="/about" color="contrast">Link</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);