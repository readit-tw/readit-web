import React from 'react';
import Resource from './resource';

export default React.createClass({
  render(): any {
    return <div className="resources">
      <Resource url="http://bimorphic.com" title="Bimorphic" />
      <Resource url="http://bimorphic.com" title="Bimorphic" />
    </div>;
  }
});
