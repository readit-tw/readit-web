import React from 'react';
import Resource from './resource';

export default React.createClass({
  render(): any {
    let resources = this.props.data.map(r => {
      return <Resource url={r.url} title={r.title} />;
    });
    return <div className="resources-list">
      {resources}
    </div>;
  }
});
