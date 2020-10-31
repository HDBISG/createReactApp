import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  }
}));


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const onTargetIdentityChange = (event) => {
    setPersonName(event.target.value ); // its undefined always 
  }
  
  const splitedIdenties = { 
   'abc1' :[{ id: 12, age: '2' },{ id: 13, age: '3' }], 
   'abc2': [{ id: 14, age: '22' },{ id: 15, age: '25' }] 
  };

  return (
    <Select value={personName} onChange={onTargetIdentityChange}>
    {Object.keys(splitedIdenties).map((identityTypeKey, identityTypeIndex) => 
    <div key={identityTypeIndex}>
      <ListSubheader>{identityTypeKey}</ListSubheader>
      {splitedIdenties[identityTypeKey].map(identity => 
        <MenuItem key={identity.id} value={identity.id}>{identity.age}</MenuItem>
        )}
    </div>
  )}
</Select>
  );
}
