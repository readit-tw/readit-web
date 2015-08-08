import React from 'react';
import ResourcesList from './resources_list';
import ResourceForm from './resource_form.js';

export default React.createClass({
  getInitialState(): any {
    return {data: [{title: "Bimorphic", url: "http://bimorphic.com"}]};
  },
  render(): any {
    return <div className="resources">
      <ResourceForm />
      <ResourcesList data={this.state.data} />
    </div>;
  }
});
