import React from 'react';
import $ from 'jquery';
import ResourcesList from './resources_list';
import ResourceForm from './resource_form.js';

export default React.createClass({
  getInitialState(): any {
    return {data: [{title: "Bimorphic", url: "http://bimorphic.com"}]};
  },
  componentDidMount(): any {
    $.ajax({
      url: '/resources',
      dataType: 'json',
      success: (data) => this.setState({data: data}),
      error: (xhr, status, err) => console.error(status, err.toString())
    });
  },
  render(): any {
    return <div className="resources">
      <ResourceForm />
      <ResourcesList data={this.state.data} />
    </div>;
  }
});
