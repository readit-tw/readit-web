import React from 'react';
import Resource from './resource';

export default React.createClass({
  render(): any {
    let resources = this.props.data.map(r => {
      return <Resource link={r.link} title={r.title} />;
    });
    return <div className="resources-list">
      {resources}
    </div>;
  }
});
