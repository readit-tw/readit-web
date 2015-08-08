import React from 'react';

export default React.createClass({
  render(): any {
    return <p className="resource">
      <a href={this.props.url}>{this.props.title}</a>
    </p>;
  }
});
