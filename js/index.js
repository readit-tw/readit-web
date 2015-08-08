import React from 'react';
import Resources from './resources';
import ResourceForm from './resource_form';

React.render(
  <div>
    <ResourceForm />
    <Resources />
  </div>,
  document.getElementById('resources')
);
